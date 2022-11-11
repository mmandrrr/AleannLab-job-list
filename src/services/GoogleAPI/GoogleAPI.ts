class GoogleAPI {
    _key = process.env.REACT_APP_GOOGLE_KEY;

    getLocation = async (url : string,key = this._key) => {
        const response = await fetch(`${url}${key}`)

        return await response.json()
    }
}

export default GoogleAPI
