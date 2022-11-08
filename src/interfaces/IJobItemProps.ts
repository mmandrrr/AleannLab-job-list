export interface IJobItemProps {
    name : string
    address : string   
    title : string
    pic : Array<string>
    date : string
    location : {
        lat : string
        long : string
    }
    id : string
}