import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import HeroArea from "../components/HeroArea";


const NavBar = () => {

  const [sideBar, setSidebar] = useState(false)
  const [hideIcon, setHideIcon] = useState(false)
 

//active-nav

  const closemenu = () => {
    setSidebar(false)
    setHideIcon(false)
  }
  const openmenu = () => {
    setSidebar(true)
    setHideIcon(true)
  }
  return (
    <div id="header">
      <div className="container">
        <nav>
         <Link to='/'> <img src="/images/logo.png" className="logo" alt="" /></Link>
          <ul id="sidemenu" className={`${sideBar ? 'open' : 'close'}`}>
            <li><Link  to="#header">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="#portfolio">Projects</Link></li>
            <li><Link to="#contact">Contact</Link></li>
            <i style={{ color: 'wheat' }} className={`icon fas fa-times  ${hideIcon ? '' : 'hideIcon'} `} onClick={closemenu} ></i>
          </ul>
          <i style={{ color: 'wheat' }} className={`icon fas fa-bars ${hideIcon ? 'hideIcon' : ''}`} onClick={openmenu}></i>
        </nav>
        {/* <HeroArea /> */}
      </div>
    </div>
  )
};

export default NavBar;
