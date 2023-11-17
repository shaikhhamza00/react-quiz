// Header.js

import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='brand'>Bakery</div>
        <div className='menu-container'>
          <ul className='menu-list'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Menu</a>
            </li>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
