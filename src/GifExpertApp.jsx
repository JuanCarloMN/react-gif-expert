import { useState } from 'react';
import { AddCategorias, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Punk']);

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategorias 
                onNewCategory={ (value) => onAddCategory( value )}
            />
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }
        </>
    )
}

