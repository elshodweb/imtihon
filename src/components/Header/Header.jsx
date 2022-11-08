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
                  <Logo className="header__logo"/>
                  <Nav className="header__vav" />
                  <Search className="header__search"/>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Header