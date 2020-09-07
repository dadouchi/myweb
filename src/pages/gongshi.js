import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"

const GongshiPage = () => (
  
    <div>
    <Header />
    <SEO title="gongshi" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>运营交互设计公式</h1>
        <p>我在搜狐号资讯负责了很多运营活动的交互设计工作，包括集卡类、养成类、闯关类的活动。这些活动看似独立，究其本质其实都有着相似的公式。</p>
        <img src={require('../images/gongshi002.jpeg')} ></img>
        <p>这个公式就是“触发+行动+酬劳+投入”。</p>
        <img src={require('../images/gongshi003.jpeg')} ></img>
        <h2>1、触发</h2>
        <img src={require('../images/gongshi005.jpeg')} ></img>
        <img src={require('../images/gongshi006.jpeg')} ></img>
        <img src={require('../images/gongshi007.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>2、行动</h2>
        <img src={require('../images/gongshi010.jpeg')} ></img>
        <img src={require('../images/gongshi011.jpeg')} ></img>
        <img src={require('../images/gongshi012.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>3、酬劳</h2>
        <img src={require('../images/gongshi017.jpeg')} ></img>
        <img src={require('../images/gongshi018.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>4、投入</h2>
        <img src={require('../images/gongshi021.jpeg')} ></img>
        <img src={require('../images/gongshi022.jpeg')} ></img>
        <img src={require('../images/gongshi023.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>5、最后</h2>
        <p>以上是本人的实战经验的总结，目的在于更好的指导将来类似的设计工作。设计师需要在相似的项目当中找到底层互动的内核，这样才能拉通设计的基本能力。</p>
        <img src={require('../images/gongshi026.jpeg')} ></img>
        <br />
        <br />
        <br />  
        <br />
        <br />
        <br />

        
    </div>
    </div>
)

export default GongshiPage