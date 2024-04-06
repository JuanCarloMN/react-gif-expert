import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => {
    const title = 'Titulo';
    const url = 'https://www.explore.com/img/gallery/the-50-most-incredible-landscapes-in-the-whole-entire-world/intro-1672072042.webp';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url }/> );
        expect( container ).toMatchSnapshot();        
    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url }/> );
        // screen.debug();
        // console.log(screen.getByRole('img').alt);
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );
        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    })
    
    test('Debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={ title } url={ url }/> );
        expect( screen.getByText( title )).toBeTruthy();
    })
    
});
