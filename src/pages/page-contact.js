import React from "react"
import { Link } from "gatsby"
import '../layout/page-contact.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const ContactPage = () => (
  
    <div>
    <Header />
    <SEO title="page-contact" />
    <div className="ProjectTitle">
      <h1>Let's talk</h1>
      <h2>Feel free to contact me</h2>
    </div>

    <div className="ContactGroup">
    <div className="Contact1">
    <p> </p>
    <p> </p>
    <h1>手机</h1>
    <p>13126652270</p>
    <h1>邮箱</h1>
    <p>1515513275@qq.com</p>
    <h1>QQ</h1>
    <p>1515513275</p>
    <h1>微信</h1>
    <p>lvfangtuotuo</p>
    <h1>认证</h1>
    <a href="https://www.uisdc.com/u/38392#publish#hunter" target="_blank">优设-细节猎人专栏作者</a>
    <p> </p>
    <a href="http://www.woshipm.com/u/298058" target="_blank">人人都是产品经理作者</a>
    <p> </p>
    </div>
    
    
    </div>
    <div className="buttonPic2"><img src={require('../images/erweima2.png')} ></img></div>
      
        <BottomGroup/>
        
    </div>
    
)

export default ContactPage