import React, { useState } from 'react';


const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger" onClick={toggleMenu}>


<img src={'images/Hamburgr.png'}/>

      </div>
      
      <div className={`menu ${menuOpen ? 'show' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <ul>
          <li><a href="#">Menu Item 1</a></li>
          <li><a href="#">Menu Item 2</a></li>
          <li><a href="#">Menu Item 3</a></li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;


