import {useEffect, useState} from "react";
import axios from "axios";

function useDataFromAPI(apiUrl) {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(apiUrl)
            setData(response.data)
        }

        fetchData();
    }, [apiUrl]);
    return data
}

export default useDataFromAPI;