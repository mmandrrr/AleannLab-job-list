export interface IPageContainerProps {
    date : string,
    description : string,
    phone : string,
    benefits : Array<string>,
    location : {
        lat : string,
        long : string
    },
    pictures : Array<string>,
    title : string,
    address : string,
    email : string,
    salary : string,
    employmentType : Array<string>
}