// interface IListGen {
//     data : Array <any>,
//     num  : number
// }

class ListGen {
    listGen = (data : Array<any>, num : number) : Array <number> => {
        const jobArr : Array<number> = [];

        for(let i = num; i < num + 15; i++) {
            if(data[i]) {
                jobArr.push(data[i]);
            }
        }

        return jobArr;
    }
}

export default ListGen