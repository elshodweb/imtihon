import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import "./Blog.scss"
function Blog() {
   return (
      <div className="blog">
         <Header />
         <Outlet />
         <Footer />
      </div>
   )
}
export default Blog