class GetPage {
    getPage = (id : string,arr : Array<any>) : Array<any> => {
        const pageData : Array<any> = arr.filter(item => item.id === id);
        return pageData
    }
}

export default GetPage