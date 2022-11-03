import { render } from "@testing-library/react";
import Home from "../components/Home";

describe('Confirming display of home', () => { 
    it('Home displays', () => {
        const HomeDisplay = render(<Home />);
        expect(HomeDisplay).toMatchSnapshot();
    })
 })