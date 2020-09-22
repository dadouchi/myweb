import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const JiankangPage = () => (
  
    <div>
    <Header />
    <SEO title="jhgf" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>搜狐资讯健康板块改版探索</h1>
        <p>搜狐资讯2019.8-2020.1尝试了很多健康方向的功能，包括“走路赚狐币”、“健康辟谣答题小课堂”、“养鸡拿蛋”、“生肖运势”、“每日健康贴士”等一系列和健康养生相关的功能。</p>
        <img src={require('../images/jiankang002.jpeg')} ></img>
        <img src={require('../images/jiankang003.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>1、设计分析</h2>
        <img src={require('../images/jiankang004.jpeg')} ></img>
        <img src={require('../images/jiankang005.jpeg')} ></img>
        <img src={require('../images/jiankang006.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>2、框架层</h2>
        <img src={require('../images/jiankang008.jpeg')} ></img>
        <img src={require('../images/jiankang009.jpeg')} ></img>
        <img src={require('../images/jiankang011.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>3、结构层</h2>
        <img src={require('../images/jiankang013.jpeg')} ></img>
        <img src={require('../images/jiankang014.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>4、表现层</h2>
        <img src={require('../images/jiankang016.jpeg')} ></img>
        <img src={require('../images/jiankang017.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>5、最后</h2>
        <p>由于之后资讯业务组织架构调整，导致健康这个方向全面停摆。本文档最终并没有形成可执行的方案，仅作为日常工作当中的一些小思考。</p>
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

export default JiankangPage