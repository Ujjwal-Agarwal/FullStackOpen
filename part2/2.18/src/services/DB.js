import { useEffect } from "react";
import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/all"

const getAll = (props)=>{
    const request= axios.get(baseUrl);
    return request.then(response=>response.data); 
};

export default getAll;