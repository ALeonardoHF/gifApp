import React from 'react';
import '../index.css';

export const GifGridItem = ({id, title, url}) => {
    
    return (
        // <div className="card animate__animated animate__flip">
        //     <img src={url} alt={title}/>
        //     <p>{title}</p>
        // </div>
        <>
        {/* <h1>The Purest of Doggos</h1> */}
        <div>
            <a href={url} target="_blank" rel="noreferrer">
            <img class='grid-item grid-item-1' src={url} alt={title} />
            </a>
            <p>{title}</p>
        </div>
        </>
    )
}
