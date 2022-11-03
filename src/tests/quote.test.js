import { render } from "@testing-library/react";
import Quote from "../components/Quote";

describe('Confirming display of quote', () => { 
    it('quote displays', () => {
        const quoteDisplay = render(<Quote />);
        expect(quoteDisplay).toMatchSnapshot();
    })
 })