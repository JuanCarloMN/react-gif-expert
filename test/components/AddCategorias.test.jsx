import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategorias } from '../../src/components/AddCategorias';

describe('Pruebas en <AddCategorias />', () => {
  
    test('Debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategorias onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Punk' } } );

        expect( input.value ).toBe( 'Punk' );
        // screen.debug();
    });
    
    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'Punk';
        const onNewCategory = jest.fn();

        render( <AddCategorias onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    test('No debe llamar el onNewCategory si el input está vacío', () => {
        
        const onNewCategory = jest.fn();

        render( <AddCategorias onNewCategory={ onNewCategory } />);
        const form = screen.getByRole( 'form' );

        fireEvent.submit( form );
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });
    
});
