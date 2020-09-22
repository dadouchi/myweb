import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const JhgfPage = () => (
  
    <div>
    <Header />
    <SEO title="jhgf" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>交互设计APP规范</h1>
        <p>交互设计规范是用来规范交互设计师的准则。规范和秩序存在于生活的方方面面。规范操作让其井井有条且高效运作，从日常工作规范到设计规范，都能起到相同的效用。</p>
    
        <p>接下来，我将从3个方面来进行介绍。</p>
        <h2>1、转场</h2>
        <img src={require('../images/jhgf_1.png')} ></img>
        <img src={require('../images/jhgf_2.png')} ></img>
        <img src={require('../images/jhgf_3.png')} ></img>
        <img src={require('../images/jhgf_4.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>2、缺省页</h2>
        <img src={require('../images/jhgf_5.png')} ></img>
        <img src={require('../images/jhgf_6.png')} ></img>
        <img src={require('../images/jhgf_7.png')} ></img>
        <img src={require('../images/jhgf_8.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>3、加载</h2>
        <img src={require('../images/jhgf_9.png')} ></img>
        <img src={require('../images/jhgf_10.png')} ></img>
        <img src={require('../images/jhgf_11.png')} ></img>
        <img src={require('../images/jhgf_12.png')} ></img>
        <img src={require('../images/jhgf_13.png')} ></img>
        <img src={require('../images/jhgf_14.png')} ></img>
        <img src={require('../images/jhgf_15.png')} ></img>
        <img src={require('../images/jhgf_16.png')} ></img>
        <img src={require('../images/jhgf_17.png')} ></img>
        <img src={require('../images/jhgf_11.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>4、最后</h2>
        <p>设计规范是工具，提升效率是核心，同时也可以当做标尺，保证设计稿产出的质量和产品统一性。规范是基础，并不能概括所有场景，随着产品业务的变化，规范需要迭代更新的。</p>
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

export default JhgfPage