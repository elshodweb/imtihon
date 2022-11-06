import axios from "./../../lib/axios"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
import { toCapitalize } from "../../lib/toCapitalize"
function Nav() {
   const [navs, setNavs] = useState([])
   
   useEffect(() => {
      axios.get("/category")
         .then(({data}) => setNavs(data))
         .catch(err => console.log(err))
         .finally()
   }, [])

   return (
      <div className='nav'>
         <ul className="nav__list">
            {
               navs.length>0 && navs.map((item)=>{
                  return(<Link key={item.id} to={"/posts/"+item.id} className="nav__link"><li className="nav__item">{toCapitalize(item.name)}</li></Link>)
               })
            }
            </ul>
      </div>
   )
}
export default Nav