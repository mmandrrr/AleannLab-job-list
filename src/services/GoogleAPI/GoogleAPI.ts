class GoogleAPI {
    _key : string | undefined = process.env.REACT_APP_GOOGLE_KEY 

    getLocation = async (url : string ,key = this._key) => {
        const response = await fetch(`${url}${key}`)

        if(!response.ok) {
            throw new Error(`Couldn't fetch ${url}`);
        }

        return await response.json()
    }
}

export default GoogleAPI
