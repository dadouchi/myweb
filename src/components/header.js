import React from "react"
import { Link } from "gatsby"



import './Header.css'




const Header = ({ siteTitle }) => (
  <div className="HeaderGroup">
  <div className="HeaderCenter">
    
      <div className="header-menu">
     <Link to="/page-contact">CONTACT</Link>
     <Link to="/page-practice">PRACTICE</Link>
     <a href="https://y1umir8ka2.feishu.cn/file/boxcn8VOevu9MJ1zBlX6N9Kgetd" target="_blank">RESUME</a>
     <Link to="/page-2">PROJECT</Link>
     <Link to="/">HOME</Link>
  </div>
  </div>
</div>
)



export default Header
