import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
// http://localhost:8080/sheets/fraz

export const getData = async(endpoint) =>{
    console.log(BASE_URL + endpoint);
    try {
        // const response = await axios.get(BASE_URL + endpoint)
        const response = await axios.get(BASE_URL + endpoint)
        console.log('data', response)
        return await response.data
    } catch (error) {
        console.log(error)
    }
}