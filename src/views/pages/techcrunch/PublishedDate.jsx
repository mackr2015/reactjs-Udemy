import React from 'react'

function PublishedDate(props) {

    const dateObj = new Date(props.date)

    let formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',  
        year: 'numeric',
        day: 'numeric'
    }).format(dateObj)


    return (
    <div key={props.id}>
        {formattedDate}
    </div>
    )
}

export default PublishedDate