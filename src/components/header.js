import React from "react"
import { Link } from "gatsby"



import './Header.css'




const Header = ({ siteTitle }) => (
  <div className="HeaderGroup">
  <div className="HeaderCenter">
    
      <div className="header-menu">
     <Link to="/404">CONTACT</Link>
     <Link to="/page-2">BLOG</Link>
     <Link to="/page-3">PROJECT</Link>
     <Link to="/page-2">RESUME</Link>
     <Link to="/">HOME</Link>
  </div>
  </div>
</div>
)



export default Header
