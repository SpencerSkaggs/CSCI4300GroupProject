import React from 'react'

function NavBar() {
  return (

    <nav>
        <ul className='nav-links'>
          <li className='nav-items'>
            <a href="/home"> Home</a>
          </li>

          <li className='nav-items'>
            <a href='/aboutUs'> About</a>
          </li>

          <li className='nav-items'>
            <a href='#'>Directions</a>
          </li>
        </ul>
      </nav>
  )
}

export default NavBar