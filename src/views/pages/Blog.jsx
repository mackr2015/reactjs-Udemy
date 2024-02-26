import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../Loader'

function Blog() {
    // Bitcoin/Techcrunch news
    const API_KEY = "ef64665384014344a154b64fd8d36a9b";
    const querySearchName = "bitcoin";
    
    // https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-28&sortBy=publishedAt&apiKey=API_KEY
    // Format date as "YYYY-MM-DD"
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedCurrentDate = `${year}-${month}-${day - 1}`;

    const API_URL = `https://newsapi.org/v2/everything?q=${querySearchName}&from=${formattedCurrentDate}&sortBy=publishedAt&apiKey=${API_KEY}`;

    const [news, setNews] = useState({
        loading: false,
        data: null
    });

    let content = null;

    useEffect(() => {
        setNews({
            loading: true,
            data: null,
            error: false
        })
        axios.get(API_URL)
            .then((response) => {
                setNews({
                    loading: false,
                    data: response.data,
                    error: false
                })
                
            })
            .catch((error) => {
                setNews({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [API_URL])

    if( news.error ) {
        content = <p>There was an error. Try again later</p>
    }

    if( news.loading ){
        content = <Loader/>
    }

    if (news.data) {
        const arrLimit = 8

        const limitApiData = news.data.articles.slice(0, arrLimit)
        content = 
        <div>
            {
                limitApiData.map((article) => (
                    <div key={article.id} className="article">
                        <h3 className="mb-4 block">{article.title}</h3>
                        <img src={article.urlToImage} alt="article img" />
                        <p>{article.description}</p>
                    </div>
                ))
            }
        </div>

    }


   

    return (
        <div className="container container-main">
            {content}
        </div>
    )

}

export default Blog;
