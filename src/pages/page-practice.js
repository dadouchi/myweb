import React from "react"
import { Link } from "gatsby"
import '../layout/page-practice.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'
import PracticeCard from '../components/PracticeCard'

const PracticePage = () => (
  
    <div>
    <Header />
    <SEO title="page-practice" />
    <div className="PracticeTitle">
      <h1>Practice</h1>
      <h2>Practice makes perfect</h2>
    </div>

    <div className="Page2T">
    <h1> </h1>
    <h1>1</h1>
    <h1>1</h1>
    <h2> </h2>
    <h2>建模</h2>
    <h2>手绘</h2>
    </div>


    <div className="PracticeGroup">
    <PracticeCard
    image={require('../images/c4d_cover.png')}
    bloglink="/c4d"
  />
      <PracticeCard
    image={require('../images/myself_cover.png')}
    bloglink="/myself"
  />
    
    
    
    
    
    </div>
   
      
        <BottomGroup/>
        
    </div>
    
)

export default PracticePage