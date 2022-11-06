import "./Login.scss"
import React from 'react'
import Logo from "./../Logo/Logo"
function Login() {
   return (
      <div className='login'>
         <div className="container">
         <Logo/>
            <div className="login__body">
               <p className="login__descrip">
                  Sahifamga xush kelibsiz! Pulli kontentni o’qish uchun tizimga kiring.
               </p>
               <form className="form">
                  <h3 className="form__title">Login</h3>
                  <input type="text" placeholder="Login" className="form__input" />
                  <input type="password" placeholder="Password" className="form__input" />
                  <button className="form__btn">Submit</button>
               </form>
            </div>
         </div>
      </div>
   )
}
export default Login