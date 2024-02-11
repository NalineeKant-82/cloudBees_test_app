import {useState} from "react";
import axios from "axios";
const UseAxios = () => {

    const [data,setData]=useState([]);
    const [error,setError]=useState('')

  const fetchData = async (url) => {
    try {
      const res = await axios(url);
      if(res)
      {
        setData(res?.data)
      }
    } catch (err) {
        setError(err)
    }
  };

  return {fetchData,data,error}
};

export default UseAxios;
