import axios from "./../../lib/axios";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss";
import { toCapitalize } from "../../lib/toCapitalize";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/categorySlice";
function Nav() {
   const [navs, setNavs] = useState([])
   const dispatch = useDispatch();
   const [isOpenNav, setIsOpenNav] = useState(false)
   useEffect(() => {
      axios.get("/category")
         .then(({ data }) => {
            let category = data
            dispatch(setCategory({ category }))
            setNavs(data)
         })
         .catch(err => console.log(err))
         .finally()
   }, [dispatch])
   const openClose = () => {
      setIsOpenNav(!isOpenNav);
   }
   return (
      <div className='nav'>
         <button onClick={openClose} className={`menu-btn ${isOpenNav && "active"}`}>
            <span></span>
         </button>
         <ul className={`nav__list ${isOpenNav && "open"}`}>
            {
               navs.length > 0 && (navs.slice(0, 4)).map((item) => {
                  return (<Link onClick={() => { isOpenNav && setIsOpenNav(false) }} key={item.id} to={"/home/" + item.id} className="nav__link"><li className="nav__item">{toCapitalize(item.name)}</li></Link>)
               })
            }
         </ul>
      </div>
   )
}
export default Nav