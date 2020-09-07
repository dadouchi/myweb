import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"

const TaskPage = () => (
  
    <div>
    <Header />
    <SEO title="task" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>搜狐资讯任务体系交互规范</h1>
        <p>交互设计规范是用来规范交互设计师的准则。规范和秩序存在于生活的方方面面。规范操作让其井井有条且高效运作，从日常工作规范到设计规范，都能起到相同的效用。</p>
        <h2>1、为什么要规范化呢</h2>
        <img src={require('../images/task_2.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>2、规划说明</h2>
        <p>接下来，我将“卡片配置说明、活动类型、获得奖励反馈”3个方面来进行阐述。</p>
        <img src={require('../images/task_4.png')} ></img>
        <img src={require('../images/task_3.png')} ></img>
        <img src={require('../images/task_5.png')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>3、最后</h2>
        <p>任务体系在搜狐资讯APP中的很多运营活动中反复使用到，统一的交互操作可以提高团队整体的效率且遵循用户的使用习惯。</p>
        <br />
        <br />
        <br />  
        <br />
        <br />
        <br />

        
    </div>
    </div>
)

export default TaskPage