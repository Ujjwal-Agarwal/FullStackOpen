import axios from 'axios';
const baseUrl = 'http://localhost:3001/counter'

const getCurrent = ()=>{
    const request = axios.get(baseUrl);
    return request.then(response=>response.data)
    // request.then((response)=>{
    //     const secondRequest = axios.put(`${baseUrl}`,response.data.current+1)
    //     console.log(response);
    //     return secondRequest.then((responsetwo)=>responsetwo.data)
    // })
}
export default {getCurrent}