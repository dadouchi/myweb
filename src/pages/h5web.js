import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const H5webPage = () => (
  
    <div>
    <Header />
    <SEO title="h5web" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>可视化H5搭建平台</h1>
        <p>项目诞生于搜狐横向训练营，类似于黑马大赛。在一个月内，自由组队，基于业务，发起项目。在这个活动中，本人担任的是项目经理的角色，承担了产品经理、交互设计和UI设计的工作。是本人无限挑战自我能力边界的一个创新型项目。</p>
        <img src={require('../images/h5web002.jpeg')} ></img>
        <p>本人将从4个方面来阐述这个项目，分别是“问题剖析、解决思路、当前结果、未来规划”</p>
        <img src={require('../images/h5web003.jpeg')} ></img>
        <img src={require('../images/h5web004.jpeg')} ></img>
        <img src={require('../images/h5web005.jpeg')} ></img>
        <img src={require('../images/h5web006.jpeg')} ></img>
        <img src={require('../images/h5web007.jpeg')} ></img>
        <img src={require('../images/h5web008.jpeg')} ></img>
        <img src={require('../images/h5web009.jpeg')} ></img>
        <img src={require('../images/h5web010.jpeg')} ></img>
        <img src={require('../images/h5web011.jpeg')} ></img>
        <img src={require('../images/h5web012.jpeg')} ></img>
        <img src={require('../images/h5web013.jpeg')} ></img>
        <img src={require('../images/h5web014.jpeg')} ></img>
        <img src={require('../images/h5web015.jpeg')} ></img>

        
        <br />
        <br />
        <br />  
        <br />
        <br />
        <br />
        <BottomGroup/>
        
    </div>
    </div>
)

export default H5webPage