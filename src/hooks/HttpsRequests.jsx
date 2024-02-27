import React, {useState, useEffect} from 'react'
import axios from 'axios';

function useAxiosGet(API_URL) {
    const [request, setRequest] = useState({
        loading: false,
        data: null
    });

    useEffect(() => {

        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(API_URL)
            .then((response) => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch((error) => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })

    }, [API_URL])


    return request
}

export default useAxiosGet