import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const LiebianPage = () => (
  
    <div>
    <Header />
    <SEO title="liebian" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>裂变活动设计调研</h1>
        <p>最近一直被拼多多的“砍一刀”朋友圈链接疯狂支配。我从最开始的不屑一顾，到后来的顶礼膜拜，也就用了1天的时间。不得不感慨一句“真香”。所以，觉着很必要对拼多多的裂变活动进行一下分析，探寻里面是否有一些值得学习的套路。</p>
        <br />
        <br />
        <br />
        <br />
        <h2>1、进入活动</h2>
        <img src={require('../images/liebian_6.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>2、引导分享</h2>
        <img src={require('../images/liebian_7.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>3、次级分享</h2>
        <img src={require('../images/liebian_8.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>4、总结归纳</h2>
        <p>拼多多的套路就是：1、你是最幸运的，你已经获得了最终大奖；2、几次简单的分享就可以换一个超级大奖；3、把好处分散，让用户有很多次获得红包的愉悦感受；且增加了很多红包的游戏感，使得用户乐此不疲的陷入其中。</p>
        <img src={require('../images/liebian_9.png')} ></img>
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

export default LiebianPage