import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Punk';
  
    test('Debe de mostrar el loading inicialmente', () => {
    
        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true
        });
        render( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    });
    
    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    
        const gifs = [
            {
                id: 'ABC',
                title: 'Punk',
                url: 'https://localhost/punk.jpg'
            },
            {
                id: '123',
                title: 'Rancid',
                url: 'https://localhost/rancid.jpg'
            },
        ];

        useFetchGifs.mockReturnValue( {
            images: gifs,
            isLoading: true
        });
        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length).toBe(2);
    })
    
});
