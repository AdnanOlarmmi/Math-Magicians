import React from 'react';

const Header = () => (
  <header className="flex-row">
    <h1>Math Magicians</h1>
    <nav>
      <ul className="flex-row">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/calculator">Calculator</a>
        </li>
        <li>
          <a href="/quote">Quote</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
