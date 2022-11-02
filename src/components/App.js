import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';
// eslint-disable-next-line
const App = () => {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;
