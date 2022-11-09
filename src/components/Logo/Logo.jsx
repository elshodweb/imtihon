import React from 'react';
import "./Logo.scss";
import { Link } from 'react-router-dom';
import logoImg from "./../../assets/icons/logo-black.svg";
function Logo() {
   return (
      <div className="logo">
         <Link to="/" className="logo__link">
            <img src={logoImg} width={"58px"} height={"58px"} alt="logo" />
            <strong>BoburBlog</strong>
         </Link>
      </div>
   )
}
export default Logo;