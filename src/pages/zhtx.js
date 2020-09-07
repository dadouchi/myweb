import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"

const ZhtxPage = () => (
  
    <div>
    <Header />
    <SEO title="zhtx" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>百聘B端账号体系</h1>
        <p>账号体系是B端平台的底层系统，在此基础上，用户行为、业务发展等因素会引发账号间交互的需求。在业务发展过程中，账号体系建设经常会遇到各种问题，本人对用户注册、登录和认证等账号功能设计进行了分析，结合相关流程总结了自己的思考和理解，总结归纳。</p>
        <img src={require('../images/zhtx_1.png')} ></img>
        <img src={require('../images/zhtx_2.png')} ></img>
        <img src={require('../images/zhtx_3.png')} ></img>
        <img src={require('../images/zhtx_4.png')} ></img>
        <img src={require('../images/zhtx_5.png')} ></img>
        <img src={require('../images/zhtx_6.png')} ></img>
        <img src={require('../images/zhtx_7.png')} ></img>
        <img src={require('../images/zhtx_8.png')} ></img>
        <img src={require('../images/zhtx_9.png')} ></img>
        <img src={require('../images/zhtx_10.png')} ></img>
        <img src={require('../images/zhtx_11.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>3、最后</h2>
        <p>文章的内容主要是最近工作中实际的使用场景，参考了现有的资料，结合自己系统的实际情况，对自己最近工作中的一些感悟做了一次小结。</p>
        <br />
        <br />
        <br />  
        <br />
        <br />
        <br />

        
    </div>
    </div>
)

export default ZhtxPage