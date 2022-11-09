import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import "./Blog.scss";
function Blog() {
   const storage = window.localStorage;
   return (
      <div className="blog">
         {
            ((storage.getItem("token") === "QpwL5tke4Pnpja7X4")) ?
               <>
                  <Header />
                  <Outlet />
                  <Footer />
               </> : <Navigate to="/" />
         }
      </div>
   )
}
export default Blog;