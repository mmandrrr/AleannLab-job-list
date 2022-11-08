// Modules
import { FC } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// Interfaces
import { IMapProps } from '../../../interfaces/IMapProps';
import { IGglMapProps } from '../../../interfaces/IGglMapProps';

const Map : FC<IMapProps>  = ({address,email,cords,phone}) => {
    let key : string = '';

    if(process.env.REACT_APP_GOOGLE_KEY) {
        key = process.env.REACT_APP_GOOGLE_KEY
    }

    const { isLoaded } = useLoadScript({googleMapsApiKey : key});
    
    return(
        <>
            {(!isLoaded) ? <div>No match Address</div> : <div className="max-[1024px]:mb-[27px] relative"><GglMap phone = {phone} email = {email} address={address} cords = {cords}/></div>}
        </>
    )
}

const GglMap : FC<IGglMapProps> = ({cords,phone,address,email}) => {
    const {lat, long} = cords,
          center = {lat : +lat + 10, lng : +long + 10};

    return(
        <>
            <h1 className="hidden font-bold text-[28px] leading-[34px] tracking-[0.413333px] text-[#3A4562] pb-[9px] mb-[15px] border-b-[1px] border-solid border-[rgba(58,69,98,0.13)] max-[1024px]:block">Contacts</h1> 
            <div className="flex flex-col gap-[8px] w-[100%] py-[31px] px-[60px] font-bold text-[20px] leading-[25px] tracking-[-0.625px] text-[#E7EAF0] absolute z-10 bg-[rgba(42,48,71,1)]">
                Department name. <br /> University Hospital Giessen.
                <span className="text-[18px] leading-[24px] text-[#E8EBF3] tracking-[-0.5625px]">{address}</span>
                <span className="text-[18px] leading-[24px] text-[#E8EBF3] tracking-[-0.5625px]">{phone}</span>
                <span className="text-[18px] leading-[24px] text-[#E8EBF3] tracking-[-0.5625px]">{email}</span>
            </div>
            <GoogleMap 
                zoom={3} 
                center={center} 
                mapContainerClassName='rounded-[8px] mb-[30px] w-[402px] h-[432px] max-[410px]:w-[300px] max-[410px]:h-[510px]' 
                options={{mapId : '4e8e9eb86dc6042c'}}
            >
                <Marker position={{lat : +lat, lng : +long}} />
            </GoogleMap>
        </>
    )
}

export default Map