import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        
        setCategories( [ newCategory, ...categories,] );
        // console.log( newCategory );
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Listado de gifs */}
            <button onClick={ onAddCategory }>Agregar</button>
            {/** GifItem */}
            {
                categories.map( category => (
                    <GifGrid  key={ category } category={ category } />
                ))
            }
        </>
    );
};