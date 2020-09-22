import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const MyselfPage = () => (
  
    <div>
    <Header />
    <SEO title="myself" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-practice">返回</Link></a>
        </div>
        <h1>头像手绘练习</h1>
        <p>第一次尝试用Procreat手绘，还比较生疏。点击下方链接可以查看绘图的过程。</p>
        <a href="https://y1umir8ka2.feishu.cn/file/boxcncBnpO76ASeq53UaaukEiof" target="_blank">查看绘图视频</a>
        <img src={require('../images/myself_1.png')} ></img>
        <br />
        <br />
        <br />
        <img src={require('../images/myself_cover.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        
        <BottomGroup />
        
    </div>
    </div>
)

export default MyselfPage