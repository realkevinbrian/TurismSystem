import {useEffect, useState} from "react";
import axios from "axios";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading,isLoading] = useState(true)
    //Fetch data
    useEffect(() => {
        axios
        .get(url)
        .then(resp => {
            if (resp.status === 200 && resp.statusText === "OK") {
                setData(resp.data);
                isLoading(false)
            }
        }).then()
        .catch(error => console.log(error));
        return ()=>{ return data + loading};
    },[url])

    return {data,loading};
}
