import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <img src={logo} className="App-logo" alt="logo" />
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
