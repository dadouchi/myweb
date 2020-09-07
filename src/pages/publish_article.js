import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"

const PublishPage = () => (
  
    <div>
    <Header />
    <SEO title="publish_article" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>搜狐号SDK发布器</h1>
        <p>搜狐号是搜狐自媒体内容输出平台，移动端发布器常年没有更新，操作体验很差。本次迭代希望能够解决基本的体验问题，对齐竞品。</p>
        <h2>1、设计分析</h2>
        <img src={require('../images/publish_article002.jpeg')} ></img>
        <img src={require('../images/publish_article003.jpeg')} ></img>
        <img src={require('../images/publish_article004.jpeg')} ></img>
        <img src={require('../images/publish_article006.jpeg')} ></img>      
        <img src={require('../images/publish_article007.jpeg')} ></img>
        <img src={require('../images/publish_article008.jpeg')} ></img>
        <img src={require('../images/publish_article009.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>2、设计方案</h2>
        <img src={require('../images/publish_article010.jpeg')} ></img>
        <img src={require('../images/publish_article012.jpeg')} ></img>
        <img src={require('../images/publish_article014.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>3、设计总结</h2>
        <img src={require('../images/publish_article016.jpeg')} ></img>
        <img src={require('../images/publish_article017.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />


        
    </div>
    </div>
)

export default PublishPage