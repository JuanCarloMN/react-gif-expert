import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Prubas en <GifExpertApp />', () => {

    test('Debe de...', () => {
        
        render(<GifExpertApp />);
        screen.debug();
    });
 
});
