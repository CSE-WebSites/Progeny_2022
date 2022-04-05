import React,{useState} from 'react'
import "./Navbar.css"
import MenuList from './MenuList';
import { Link } from 'react-router-dom';
const Navbar = () => {
const[clicked,setClicked]=useState(false)

  const menulist = MenuList.map(({url,title},index) => {
    return (
      <li key={index}>
        <Link to={url}>{title}</Link>
        </li>
    );
  });
  const handleClick =() => {
    setClicked(!clicked)
  }
  return (
     <nav>
       <div className='logo'>
         Progeny<font> .py</font>
       </div>
      <div className='menu-icon' onClick={handleClick}>
      <i className={clicked ? 'bug icon' : 'bars icon'}></i>
      </div>
       {clicked ? <ul className='menu-list'>{menulist}</ul> : ""}
     </nav>

  )
}

export default Navbar