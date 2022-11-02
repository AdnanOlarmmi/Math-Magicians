/*eslint-disable*/
import React from 'react';
import Header from './Header';
import Home from './Home';
import Calculator from './Calculator';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Quote from './Quote';
// eslint-disable-next-line
const App = () => {

  return (<div>
    <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/quote' element={<Quote />} />
      </Routes>
    </Router>
    
    </div>);
};

export default App;
