import React from 'react'

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src="" alt="" className="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="" className='nav__link'>
              home
            </a>
          </li>
          <li className="nav__list">
            <a href="" className='nav__link'>
              Books
            </a>
          </li>
          <button className="btn__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;