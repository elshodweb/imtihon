import React from 'react'
import { Navigate } from 'react-router-dom'

function Logout() {
  
   const storage = window.localStorage;
      storage.removeItem("token");
   
   return (
    <div>
      <Navigate to={"/"} />
    </div>
  )
}

export default Logout