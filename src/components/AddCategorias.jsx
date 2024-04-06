import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const AddCategorias = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState( '' );

    const onInputChange = ({target}) => {
        setInputValue( target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        // console.log( parent.categories );
        // setCategories( categories => [...categories, inputValue]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input 
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategorias.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
