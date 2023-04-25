import React from 'react'
import  Link  from "react-router-dom";


const Navbar = () => {
  return (
    <nav >
      
     
   <ul>
    <li>
      <a href="/"> Home</a>
    </li>

    <li>
      <a href="/Contact">Contact us</a>
    </li>


    <li>
      <a href="/About">About us </a>
    </li>
   </ul>
      
      
      </nav>
  )
}

export default Navbar