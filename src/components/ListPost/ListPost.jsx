import React from 'react';
import timer from "./../../assets/icons/time.svg";
import "./ListPost.scss";
import { Link, useOutletContext } from 'react-router-dom';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { toCapitalize } from '../../lib/toCapitalize';
function ListPost() {
   const categories = useSelector(state => state.category.category)
   const [item] = useOutletContext();
   const getCategoryName = (id) => {
      if (id && categories.length > 0) {
         let name = categories[+id - 1].name
         return (toCapitalize(name))
      }
   }
   return (
      <Link to={"/home/" + item.categoryId + "/" + item.id} className='post'>
         <div className="post__row">
            <time className="post__data">{dayjs(item.createdAt).format("MMMM DD.YYYY")}</time>
            <div className="post__category">{getCategoryName(item.categoryId)}</div>
         </div>
         <div className="post__name">
            {item.title}
         </div>
         <div className="post__descr">
            {item.description}
         </div>
         <div className="post__timer">
            <img width={20} height={20} src={timer} alt="timer" />
            <span>{item.readTime} minutes read</span>
         </div>
      </Link>
   )
}
export default ListPost