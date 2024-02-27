import React from 'react'

function Excerpt(props) {
    const postExcerpt = props.excerpt.rendered.replace(/(<([^>]+)>|&#[^;]+;|\[&[^;]+;\])/gi, '')

    return (
    <div key={props.id}>
        <p className="mb-3 mt-3">
            {postExcerpt}
        </p>
    </div>
    )
}

export default Excerpt