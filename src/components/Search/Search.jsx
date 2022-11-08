import dayjs from 'dayjs';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import search from "./../../assets/icons/search.svg";
import "./Search.scss";
function Search() {
   const data = useSelector(state => state.data.data);
   const [value, setValue] = useState("");
   const [dataFitered, setDataFitered] = useState([]);
   const [isOpenModal, steIsOpenModal] = useState(false);
   const fitered = (e) => {
      e.preventDefault();
      steIsOpenModal(true)
      if (value.length > 0) {
         setDataFitered(
            (data.filter((item) => item.title.toLowerCase().includes(String(value).toLowerCase())))
         )
      } else {
         setDataFitered([])
      }
   }
   const closeModal = () => {
      setValue("")
      steIsOpenModal(false)
      setDataFitered([])
   }
   return (
      <div className='search'>
         <form onSubmit={fitered} className="search__label">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder='Search' className='search__input' />
            <button className='search__btn' >
               <img src={search} alt="search" />
            </button>
            <div className={`modal ${isOpenModal && "active"}`}>
               <div className="modal__title">
                  <span>Natijalar</span>
                  <button type='button' onClick={closeModal}>x</button>
               </div>
               <div className="modal__results">
                  {
                     dataFitered.length > 0 ? (dataFitered.map((item) => {
                        return (
                           <Link onClick={closeModal} to={"/home/" + item.categoryId + "/" + item.id} key={item.id} className="result">
                              <div className="result__row">
                                 <div className="result__name">{item.title}</div>
                                 <div className="result__date">{dayjs(item.createdAt).format("MMM DD.YYYY")}</div>
                              </div>
                              <div className="result__descr">{item.description}</div>
                           </Link>
                        )
                     })) : "Siz qidirgan narsa topilmadi"
                  }
               </div>
            </div>
         </form>
      </div>
   )
}
export default Search