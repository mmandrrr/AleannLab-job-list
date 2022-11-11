// Modules
import React, { FC, ReactElement, useEffect, useState } from "react";

// Services
import GetData from "../../services/API/getData";
import ListGen from "../../services/ListGen/ListGen";

// Interfaces
import { IJobListData } from "../../interfaces/IJobListData";

// Components
import JoblistItem from "./JoblistItem/JoblistItem";
import Switcher from "../Switcher/Switcher";

const JobList : FC = () => {

    const getData : GetData = new GetData(),
          listGen : ListGen = new ListGen(),
          [vacations, setVacations] = useState<Array<IJobListData>>([]),
          [jobList, setJobList] = useState<Array<any>>([]),
          [error, setError] = useState<Boolean>(false),
          [slideCount, setSlideCount] = useState<number>(0),
          [loading, setLoading] = useState<Boolean>(false);

    const createList = (num : number) => {
        if(vacations.length >= 1) {
            setError(false);
            setLoading(false);
            const newList : any[] = listGen.listGen(vacations, num);
            setJobList(newList.map((item : any) : ReactElement<IJobListData> => {
                return(
                    <JoblistItem    
                        name = {item.name}
                        address = {item.address}
                        key = {item.id}
                        title = {item.title}
                        pic = {item.pictures}
                        date = {item.updatedAt}
                        location = {item.location}
                        id = {item.id}
                        />
                )
            }))
        }   
    }

    const increaseSlide = (arr : Array<object>) : void => {
        setSlideCount(slideCount + 1);
        if(slideCount >= arr.length - 1) {
          setSlideCount(0);
        }
      }

      const decreaseSlide = (arr : Array<object>) : void => {
        setSlideCount(slideCount - 1);
        if(slideCount <= 0) {
          setSlideCount(arr.length - 1);
        }
      }
    
      const getSlide = (e : React.ChangeEvent ) : void => {
          let id : number = +e.target.id
          setSlideCount(id);
      }

    useEffect(() => {
        getData.getData('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=')
                .then((data) : void => {
                    setVacations(data);
                    setLoading(true);
                })
                .catch(() : void => {
                    setError(true);
                })
    },[]);

    useEffect(() => {
        createList(slideCount * 15)
    },[vacations,slideCount])

    return(
        <section className="flex flex-col items-center pt-[29px] px-[9px]">
            {error ? 'Something wents wrong' : null}

            {loading ? 'Content currently loading' : null}

            {(jobList.length >= 1 && !loading && !error) ? jobList : null}

            <Switcher 
                arr = {vacations}
                slideCount = {slideCount}
                increaseSlide = {increaseSlide}
                decreaseSlide = {decreaseSlide}
                getSlide = {getSlide}
                />
        </section>
    )
}

export default JobList