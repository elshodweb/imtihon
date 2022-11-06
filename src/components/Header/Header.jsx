import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import Search from '../Search/Search'
import "./Header.scss"
function Header() {
   return (
      <div className='header'>
         <div className="header__wrapper">
            <div className="container">
               <div className="header__row">
                  <Logo />
                  <Nav />
                  <Search />
               </div>
            </div>
         </div>
      </div>
   )
}
export default Header