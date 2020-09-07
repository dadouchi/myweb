import React from 'react'
import './Posttop.css'
import { Link } from "gatsby"
const Posttop = props =>(
    
        
            <div className="HeroGroup">
                <div className="Back">
                 <img src={require('../images/icon_back.png')} ></img>
                 <h1><Link to="/page-3">返回上一页</Link></h1>
                  
                </div>
        
                
                 <h1>{props.title}</h1>
                 <p>{props.subtitle}</p>
                 <div><img src={props.image} ></img></div>
                 
            </div>
        
    
)

export default Posttop