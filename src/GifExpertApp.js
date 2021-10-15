import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const ExpertGifApp = () => {

    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     const categorie = 'Bob Esponja';
        // setCategories([...categories, serie]);
    //     setCategories(categories => [...categories, categorie])
    // }

    return(
        <>
            <h2>ExpertGifApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {categories.map((cat)=> {
                    return(<GifGrid key={cat} category={cat}/>);
                })}
            </ol>
        </>
    );
}

export default ExpertGifApp;