import React from 'react'
import PublishedDate from './PublishedDate'
import Excerpt from './Excerpt'

function Article(props) {
    const {title, author, date, img, imgalt, excerpt} = props
  return (
    
    <div key={props.id} className="article">
        <h3 className="mb-4">{title}</h3>
        <ul className="postMeta">
            <li className="author">Author: {author}</li>
            <li className="publishedDate">
                Published:&nbsp;<PublishedDate date={date}/>
            </li>
        </ul>
        <img src={img} alt={imgalt} />
        <Excerpt excerpt={excerpt}/>
    </div>
    
  )
}

export default Article