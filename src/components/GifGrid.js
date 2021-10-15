import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import '../index.css';


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="p_size animate__animated animate__bounce">Loading...</p>}

            <div class="grid-container">
                {images.map((img)=> {
                    return (<GifGridItem key={img.id} {...img}/>);
                })}
            </div>

        </>
    )
}
