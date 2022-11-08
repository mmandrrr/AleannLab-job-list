// Modules
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Services
import GetPage from "../../services/GetPage/GetPage";
import GetData from "../../services/API/getData";

// Components
import PageContainer from "./PageContainer/PageContainer";

// Assets
import arrowLeft from '../../assets/Arrow-left-link.svg';

const JobPage : FC = () => {
    
    const id : string = document.location.pathname.split('/')[2],
          getPage : GetPage = new GetPage(),
          getData : GetData = new GetData(),
          [jobList, setJobList] = useState([]),
          [pageData,setPageData] = useState<Array<any>>([]),
          [loaded,setLoaded] = useState(false);

    useEffect(()  => {
        getData.getData('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=')
                    .then(response => setJobList(response));
    },[])

    useEffect(() => {
        if(jobList.length >= 1) {
            setPageData(getPage.getPage(id,jobList));
            setLoaded(true)
        }
    },[jobList])

    return(
        <section className="overflow-x-hidden">
            {loaded ? <PageContainer  
                            date = {pageData[0].createdAt}
                            description = {pageData[0].description}
                            phone = {pageData[0].phone}
                            benefits = {pageData[0].benefits}
                            location = {pageData[0].location}
                            pictures = {pageData[0].pictures}
                            title = {pageData[0].title}
                            address = {pageData[0].address}
                            email = {pageData[0].email}
                            salary = {pageData[0].salary}
                            employmentType = {pageData[0].employment_type}
                                                            /> : null} 

            <div className=" max-w-[1424px] px-[10px] m-auto">
                <div className="group inline-block mb-[162px] ">
                    <div className="max-[1024px]:hidden h-[52px] px-[18px] bg-[rgba(56,69,100,0.14)] rounded-[8px] transition-all duration-300 ease-in inline-block group-hover:bg-[rgba(56,69,100,0.4)]">
                        <Link className='flex items-center gap-[19px] leading-[52px] no-underline font-semibold text-[12px] text-[#3A4562] group-hover:text-[#3f5181]' to="/"><img src={arrowLeft} alt="Arrow Left"/>
                            RETURN TO JOB BOARD
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JobPage