import React, { useEffect } from 'react'
import "./SinglePost.scss";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import axios from '../../lib/axios';
import clap from "./../../assets/icons/clap.svg"
import share from "./../../assets/icons/share.svg"
import time from "./../../assets/icons/time.svg"
import { useDispatch } from 'react-redux';
import { getData } from '../../store/dataSlice';
import * as dayjs from 'dayjs';
import Spin from "./../../assets/img/Spin.gif"
import { toCapitalize } from '../../lib/toCapitalize';
function SinglePost() {
   const { id, category } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const data = useSelector(state => state.data.data);
   const categories = useSelector(state => state.category.category)
   const [singleData, setSingleData] = useState(null)
   const [load, setLoad] = useState(false)
   useEffect(() => {
      setLoad(true)
      axios.get(`/category/${category}/posts/${id}`)
         .then(({ data }) => {
            setSingleData(data)
            setLoad(false)
         })
         .catch(() => navigate("/*"))
   }, [category, navigate, id]);
   useEffect(() => {
      axios.get(`/category/${category}/posts`)
         .then(({ data }) => dispatch(getData({ data })))
         .catch((err) => navigate("/*"))
   }, [category, navigate, dispatch]);
   const getCategoryName = (id) => {
      if (categories.length > 0 && id) {
         let name = categories[+id - 1].name
         return (toCapitalize(name))
      }
   }
   return (
      <div className='single'>
         {load && <h2 className="single__loading"> <img src={Spin} alt="spin" /> Loading...</h2>}
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
                        <div className="content__category">{getCategoryName(singleData.categoryId)}</div>
                        <h2 className="content__title">{singleData.title}</h2>
                        <div className="content__info">
                           <time className="content__data">{dayjs(singleData.createdAt).format("MMM DD.YYYY")}</time>
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