import { render } from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import Header from "../components/Header";

describe('Confirming display of header', () => {
    it('Header displays', () => {
        const HeaderDisplay = render(<Router><Header /></Router>)
        expect(HeaderDisplay).toMatchSnapshot();
    })
})