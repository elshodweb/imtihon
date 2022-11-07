import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../../assets/icons/logo-light.svg"
import "./Footer.scss"
function Footer() {
   return (
      <footer className='footer'>
         <div className="container">
            <div className="footer__row">
               <Link to={"/home/1"} className="footer__logo">
                  <img src={logo} alt="logo" />
                  <span>Bobur</span>
               </Link>
               <div className="footer__sections">
                  <div className="footer__section">
                     <div className="footer__section-name">
                        FIGHT WITH ME ON:
                     </div>
                     <ul className="footer__list">
                        <li className="footer__item"><a href="/">Twitter</a></li>
                        <li className="footer__item"><a href="/">Instagram</a></li>
                        <li className="footer__item"><a href="/">Telegram</a></li>
                        <li className="footer__item"><a href="/">YouTube</a></li>
                        <li className="footer__item"><a href="/">Figma</a></li>
                     </ul>
                  </div>
                  <div className="footer__section">
                     <div className="footer__section-name">
                        WHAT I HAVE DONE:
                     </div>
                     <ul className="footer__list">
                        <li className="footer__item"><a href="/">Xalq Kutubxonasi</a></li>
                        <li className="footer__item"><a href="/">Websitee</a></li>
                        <li className="footer__item"><a href="/">Website</a></li>
                        <li className="footer__item"><a href="/">Play Market</a></li>
                        <li className="footer__item"><a href="/">App Store</a></li>
                     </ul>
                  </div>
                  <div className="footer__section">
                     <ul className="footer__list">
                        <li className="footer__item"><a href="/"> Contact</a></li>
                        <li className="footer__item"><a href="/">Blog</a></li>
                        <li className="footer__item"><a href="/">Dribbble</a></li>
                        <li className="footer__item"><a href="/">Behance</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
export default Footer