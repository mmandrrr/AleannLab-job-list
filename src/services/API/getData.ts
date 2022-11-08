class GetData {
    _key = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'

    getData = async (url : string,key : string = this._key) : Promise<any> => {
        const response = await fetch(`${url}${key}`);

        if(!response.ok) {
            throw new Error(`Couldn't fetch ${url}`);
        }
        
        return await response.json();
    }
}

export default GetData