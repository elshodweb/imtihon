import React from 'react'
import right from "./../../assets/icons/right.svg"
import left from "./../../assets/icons/left.svg"
import facebook from "./../../assets/icons/facebook.svg"
import github from "./../../assets/icons/github.svg"
import twiter from "./../../assets/icons/twiter.svg"
import linkedin from "./../../assets/icons/linkedin.svg"
import "./List.scss"
import { Outlet, } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from '../../lib/axios'
import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../store/dataSlice'
function List() {
   const dispatch = useDispatch()
   const data = useSelector(state => state.data.data)
   const { category } = useParams();
   useEffect(() => {
      axios.get(`/category/${category}/posts`)
         .then(({ data }) => dispatch(getData({ data })))
         .catch((err) => console.log(err))
         .finally()
   }, [category, dispatch])
   return (
      <div className='list'>
         <div className="container">
            <div className="list__row">
               <aside className='aside'>
                  <h4 className="aside__title">
                     What I do!
                  </h4>
                  <p className="aside__descr">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
                  </p>
                  <a href='/' className="aside__link">
                     <span>EXPLORE ME</span>
                     <button>
                        <img src={right} width="4" height={8} alt="right" />
                     </button>
                  </a>
                  <ul className="aside__socials">
                     <li className="aside__social-item">
                        <a href="/">
                           <img src={facebook} alt="facebook" />
                        </a>
                     </li>
                     <li className="aside__social-item">
                        <a href="/">
                           <img src={github} alt="github" />
                        </a>
                     </li>
                     <li className="aside__social-item">
                        <a href="/">
                           <img src={twiter} alt="twiter" />
                        </a>
                     </li>
                     <li className="aside__social-item">
                        <a href="/">
                           <img src={linkedin} alt="linkedin" />
                        </a>
                     </li>
                  </ul>
               </aside>
               <div className="posts">
                  <h2 className="posts__title">Recent Posts</h2>
                  <div className="posts__wrapper">
                     {
                        data.length > 0 && data.map((item) => <Outlet key={item.id} context={[item]} />)
                     }
                  </div>
                  <div className="pagination">
                     <button>
                        <img src={left} alt="left" />
                     </button>
                     <a href="/">1</a>
                     <a href="/">2</a>
                     <a href="/">3</a>
                     <a href="/">4</a>
                     <a href="/">5</a>
                     <button>
                        <img src={right} alt="right" />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default List