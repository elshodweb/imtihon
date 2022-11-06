import React from 'react';
import timer from "./../../assets/icons/time.svg";
import "./ListPost.scss";
import { Link, useOutletContext } from 'react-router-dom';
function ListPost() {
   const [item] = useOutletContext();
   return (
      <Link to={"/posts/" + item.categoryId + "/" + item.id} className='post'>
         <div className="post__row">
            <time className="post__data">{item.createdAt}</time>
            <div className="post__category">{item.categoryId}</div>
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