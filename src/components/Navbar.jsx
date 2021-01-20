import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import useLocalStorage from '../hooks/useLocalStorage';

const Navbar = (props) => {

  useDarkMode(useLocalStorage());

  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
