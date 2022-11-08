export interface IJobListData {
    name : string
    address : string,
    id : string,
    title : string,
    pictures : Array<string>,
    updatedAt : string,
    location : {
        lat : string,
        long : string
    }
}