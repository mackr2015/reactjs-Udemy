import React, { useState, useEffect } from "react";
import Loader from '../../Loader'
import Article from './Article'
import useAxiosGet from '../../../hooks/HttpsRequests'

function TechCrunchPosts() {

    const postsPerPage = 10
    const API_URL = `https://techcrunch.com/wp-json/wp/v2/posts?per_page=${postsPerPage}`

    let content = null

    // Custom Hook for Axios Http request
    let posts = useAxiosGet(API_URL)

    if(posts.loading) {
        content = <Loader/>
    }

    if( posts.error ){
        content = 'An error has occured. Please check the API data and endpoint.'
    }

    if( posts.data ) {

        let postExcerpt = null
        let dateObj = null
        let formattedDate = null 

        content = 
        <div>
            { 
                posts.data.map((post) => (
                    <Article 
                    title={post.yoast_head_json.og_title} 
                    author={post.yoast_head_json.author} 
                    date={post.date}
                    img={post.yoast_head_json.og_image[0].url}
                    imgalt={post.yoast_head_json.og_title}
                    excerpt={post.excerpt}/>
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

export default TechCrunchPosts