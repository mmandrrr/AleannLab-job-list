// Modules
import { useEffect, useState, FC } from 'react';
import {Link} from 'react-router-dom';

// Interface
import { IJobItemProps } from '../../../interfaces/IJobItemProps';

// import GetData from '../../../services/API/getData';
import GoogleAPI from '../../../services/GoogleAPI/GoogleAPI';

// Assets 
import stars from '../../../assets/5 star Rating Big.svg';
import save from '../../../assets/save.svg';
import locationIcon from '../../../assets/Location.svg';

interface ICity {
    results : [{
        formatted_address : string
    }]
}

const JoblistItem : FC<IJobItemProps> = ({name,title,pic,date,location,id}) => {

    const time : number = Math.ceil(((Date.now() - Date.parse(date)) / 86400000)),
          picture : string = pic[0],
          getData : GoogleAPI = new GoogleAPI(),
          [city, setCity] = useState<ICity>(({results : [{formatted_address : ''}]})),
          [town, setTown] = useState<any>(''),
          [country, setCountry] = useState<any>('');

    useEffect(() : void => {
        getData.getLocation(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.long}&key=`)
                .then(data => setCity(data));
    },[])

    useEffect(() => {
        if(city.results[0].formatted_address.length >= 1) {
            setTown(city.results[0].formatted_address.split(' ')[city.results[0].formatted_address.split(' ').length - 2])
            setCountry(city.results[0].formatted_address.split(' ')[city.results[0].formatted_address.split(' ').length - 1])
        }    
    },[city])

    return(
        <div 
            className="max-[400px]:pt-[60px] max-[568px]:pt-[44px] max-[568px]:pb-[27px] max-[568px]:px-[16px] max-[568px]:relative max-[568px]:gap-[19px] m-auto p-[24px] bg-white shadow-jobItem rounded-[8px] flex gap-[26px] mb-[8px] max-[400px]:w-[calc(290px+90*((100vw-320px)/(400-320)))] w-[calc(386.5px+1013.5*((100vw-400px)/(1920-400)))]"
        >
            <img src={picture} alt="image" className="w-[85px] h-[85px] rounded-[50%]" />
            <div className="flex flex-[1_1_50%] flex-col gap-[8px] leading-[25px] max-[568px]:w-[calc(251.5px+111*((100vw-400px)/(568-400)))]">
                <Link to={`/job/${id}`}>
                    <h1 
                        className=" max-[568px]:font-normal max-[568px]:text-[18px] max-[568px]:leading-[24px] max-[568px]:text-[#3A4562] max-[568px]:max-h-[50px] max-[568px]:overflow-hidden font-bold text-[20px] tracking-[-0.625px] text-[#3A4562] max-w-[716px] transition-all duration-300 ease-in hover:text-black"
                    >
                        {title}
                    </h1>
                </Link>
                <div className="tracking-[0.23619px] text-[#878D9D]">Department name •  {name}</div>
                <div className="flex gap-[11px] tracking-[0.23619px] text-[#878D9D]">
                    <img src={locationIcon} alt="location" />{town && country ? `${town} ${country}` : "Location didn't found"}
                </div>
            </div>
            <div className="max-[400px]:w-[calc(164px+80*((100vw-320px)/(400-320)))] max-[400px]:flex-col max-[400px]:items-end max-[400px]:gap-y-[10px] max-[568px]:w-[calc(251.5px+111*((100vw-400px)/(568-400)))] max-[568px]:justify-between max-[568px]:absolute max-[568px]:top-0 max-[568px]:right-0 max-[568px]:mt-[13px] max-[568px]:mr-[16px] flex flex-wrap gap-x-[32px] tracking-[0.23619px] text-[#878D9D] leading-[25px]">
                <img src={stars} alt="rate" className="w-[calc(50px+30*((100vw-320px)/(1920-320)))]"></img>
                <div className="flex flex-col justify-between items-end">
                    <img src={save} alt="save" className="max-[568px]:hidden w-[16px] h-[20] hover:cursor-pointer "></img>
                    <div className="max-[568px]:font-light max-[568px]:text-[14px] max-[568px]:leading-[17px] max-[568px]:w-[125px] text-right leading-[25px] tracking-[0.23619px] text-[#878D9D] w-[calc(65px+82*((100vw-568px)/(1920-568)))]">Posted {time > 365 ? `${Math.floor(time / 365)} years` : `${time} days`} ago</div>
                </div>
            </div>
        </div>
    )
}

export default JoblistItem