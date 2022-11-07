import React from 'react'
import img from "./../../assets/img/404.png"
import icon from "./../../assets/icons/right.svg"
import "./ErrorPage.scss"
function ErrorPage() {
   return (
      <div className='error'>
         <div className="container">
            <img src={img} alt="..." className="error__img" />
            <h3 className="error__title">
               Page not found - 404
            </h3>
            <p className="error__descr">This page not found (deleted or never exists).Try a phrase in search box or back to home and start again.</p>
            <a href="/" className="error__link">TAKE ME HOME!
               <img src={icon} alt="..." />
            </a>
         </div>
      </div>
   )
}
export default ErrorPage