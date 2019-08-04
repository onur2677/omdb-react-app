import OMDB_API from './config'
import axios from 'axios'

class OMDB {
    search = async title => {
        let result = false
        try {
            result = await axios.get(OMDB_API.URL, {
                params: {
                    apikey: OMDB_API.API_KEY,
                    s: title
                }
            })
            return result.data
        } catch {
            return result
        }
    }

    get = async id => {
        let result = false
        try {
            result = await axios.get(OMDB_API.URL, {
                params: {
                    apikey: OMDB_API.API_KEY,
                    i: id
                }
            })
            return result.data
        } catch {
            return result
        }
    }
}

export default new OMDB()