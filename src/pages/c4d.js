import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const C4dPage = () => (
  
    <div>
    <Header />
    <SEO title="c4d" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-practice">返回</Link></a>
        </div>
        <h1>C4D人物模型建模练习</h1>
        <p>2020年跨年的时候，和他一起去了日本。觉得这张照片挺好看，就开始尝试用c4d建模。相比于3d MAX，C4D会更加容易上手一些。在材质和打光方面，我就是使用的自带的渲染器，很容易出效果。</p>
        <img src={require('../images/c4d_1.png')} ></img>
        <br />
        <br />
        <br />
        <img src={require('../images/c4d_2.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <img src={require('../images/c4d_3.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <BottomGroup />
        
    </div>
    </div>
)

export default C4dPage