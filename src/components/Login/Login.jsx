import "./Login.scss"
import React from 'react'
import Logo from "./../Logo/Logo"
import { useState } from "react"
import axios from "../../lib/axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login() {
   const navigate = useNavigate();
   const [showModal,setShowModal]= useState(false);
   const storage = window.localStorage;
   const [login, setLogin] = useState({
      email: "",
      password: "",
   });
   useEffect(() => {
      if (storage.getItem("token") === "QpwL5tke4Pnpja7X4") {
         navigate("/home/1");
      }
   }, [storage, navigate, login])
   const getToken = (e) => {
      e.preventDefault();
      axios.post("https://reqres.in/api/login", login)
         .then(({ data }) => {
            storage.setItem("token", data.token)
            navigate("/home/1");
         }).catch(() => { createModal()})
      setLogin({
         email: "",
         password: "",
      })
   }
   const createModal = ()=>{
      setShowModal(true);
      setTimeout(() => {
         setShowModal(false);
      }, 4000);
   }

   return (
      <div className='login'>
         <div className="container">
            <Logo />
            <div className={`not-corect ${showModal && "active"}`}>
               Login yokiy Parol notog'ri!!!
            </div>
            <div className="login__body">
               <p className="login__descrip">
                  Sahifamga xush kelibsiz! Pulli kontentni o’qish uchun tizimga kiring.
               </p>
               <form onSubmit={getToken} className="form">
                  <h3 className="form__title">Login</h3>
                  <input value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} type="text" placeholder="Login" className="form__input" />
                  <input value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} type="password" placeholder="Password" className="form__input" />
                  <button className="form__btn">Submit</button>
               </form>
            </div>
         </div>
      </div>
   )
}
export default Login