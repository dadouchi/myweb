import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const BpydPage = () => (
  
    <div>
    <Header />
    <SEO title="bpyd" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>百度百聘2018-2019年度总结</h1>
        <p>百聘是帮助求职者找工作，帮助招聘方找人的平台。本人于2018年3月加入百度百聘业务组，负责C端和B端的全部设计工作，项目持续时间1年。</p>
        <img src={require('../images/bpyd_2.png')} ></img>
        <img src={require('../images/bpyd_3.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>OKR工作法</h2>
        <p>OKR是百度的一种工作方法，即目标与关键结果法。目的在于帮助团队进行目标管理和提高效率。“O”代表“目标”，承接团队的关键指标，是定性的、长远的。“K”代表“关键结果”，用来达成目标的关键路径和方法，是与目标直接相关的。</p>
        <h2>O1：提升简历数量和质量</h2>
        <img src={require('../images/bpyd_5.png')} ></img>
        <img src={require('../images/bpyd_6.png')} ></img>
        <img src={require('../images/bpyd_7.png')} ></img>
        <img src={require('../images/bpyd_8.png')} ></img>
        <img src={require('../images/bpyd_9.png')} ></img>
        <img src={require('../images/bpyd_10.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>O2：提升投递率</h2>
        <img src={require('../images/bpyd_10.png')} ></img>
        <img src={require('../images/bpyd_11.png')} ></img>
        <img src={require('../images/bpyd_12.png')} ></img>
        <img src={require('../images/bpyd_13.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>O3：提升老用户留存比例</h2>
        <img src={require('../images/bpyd_14.png')} ></img>
        <img src={require('../images/bpyd_15.png')} ></img>
        <img src={require('../images/bpyd_16.png')} ></img>
        <img src={require('../images/bpyd_17.png')} ></img>
        <img src={require('../images/bpyd_18.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>最后</h2>
        <p>百聘是我第一个长期跟进的业务线，由我和另外2名UI同学，以及2名机动成员参与。交互设计师在团队中像是一个“外交官”的角色，负责对外沟通，对内协同。</p>
        <img src={require('../images/bpyd_19.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <BottomGroup />
        
    </div>
    </div>
)

export default BpydPage