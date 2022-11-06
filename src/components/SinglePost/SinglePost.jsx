import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom'
import axios from '../../lib/axios';
import clap from "./../../assets/icons/clap.svg"
import share from "./../../assets/icons/share.svg"
import time from "./../../assets/icons/time.svg"
import "./SinglePost.scss";
import { useDispatch } from 'react-redux';
import { getData } from '../../store/dataSlice';
function SinglePost() {
   const { id, category } = useParams();
   const dispatch = useDispatch()
   const data = useSelector(state => state.data.data);
   useEffect(() => {
      axios.get(`/category/${category}/posts`)
         .then(({ data }) => dispatch(getData({ data })))
         .catch((err) => console.log(err))
         .finally()
   }, [category, dispatch])
   const [singleData, setSingleData] = useState(null)
   useEffect(() => {
      axios.get(`/category/${category}/posts/${id}`)
         .then(({ data }) => setSingleData(data))
   }, [category, id])
   return (
      <div className='single'>
         {
            singleData && (
               <div className='container'>
                  <div className="single__row">
                     <div className="events">
                        <button className="event">
                           <img src={clap} alt="clap" />
                           <span>{singleData.likes}</span>
                        </button>
                        <button className="event">
                           <img src={share} alt="clap" />
                           <span>{singleData.shares}</span>
                        </button>
                     </div>
                     <div className="content">
                        <div className="content__category">{singleData.categoryId}</div>
                        <h2 className="content__title">{singleData.title}</h2>
                        <div className="content__info">
                           <time className="content__data">{singleData.createdAt}</time>
                           |
                           <div className="content__timer">
                              <img width={16} height={16} src={time} alt="time" />
                              <span>{singleData.readTime} minutes read</span>
                           </div>
                        </div>
                        <img className='content__img' src={singleData.image} width={736} height={392} alt="img" />
                        <p className="content__descr">
                           {singleData.description}
                        </p>
                        <p className="content__content">
                           {singleData.content}
                        </p>
                        <div className="more">
                           <h3 className='more__title'>More like this</h3>
                           {
                              data.length > 0 && [...data].splice(0, 3).map((item) => {
                                 return (<Outlet key={item.id} context={[item]} />)
                              })
                           }
                        </div>
                     </div>
                  </div>
               </div>
            )
         }
      </div>
   )
}
export default SinglePost