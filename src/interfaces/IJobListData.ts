export interface IJobListData {
    name : string
    address : string,
    id : string,
    title : string,
    pictures : Array<any>,
    updatedAt : string,
    location : {
        lat : string,
        long : string
    }
}