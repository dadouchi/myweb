import React from "react"
import { Link } from "gatsby"

import Header from '../components/header'
import SEO from "../components/seo"
import BlogCard from '../components/BlogCard'
import BottomGroup from '../components/BottomGroup'
import '../layout/page-2.css'
const SecondPage = () => (
  
    <div>
     <Header /> 
    <SEO title="Page two" />
    <div className="ProjectTitle">
      <h1>Project Story</h1>
      <h2>Selection of my recent works</h2>
    </div>

    <div className="Page2T">
    <h1>5</h1>
    <h1>3</h1>
    <h1>3</h1>
    <h2>项目</h2>
    <h2>规范</h2>
    <h2>探索</h2>
    </div>
    

    <div className="Page2G">
    
    <div className="BlogGroup">
    <BlogCard
      image={require('../images/bpyd_cover.png')}
      blogtitle="百度百聘C端2018-2019年度总结"
      blogtag="B端"
      bloglink="/bpyd"
    />
    <BlogCard
      image={require('../images/gongshi_cover.png')}
      blogtitle="搜狐资讯运营活动交互设计公式"
      blogtag="C端"
      bloglink="/gongshi"
    />
    <BlogCard
      image={require('../images/fenxiang_cover.png')}
      blogtitle="交互设计自查表"
      blogtag="通用"
      bloglink="/fenxiang"
    />
    <BlogCard
      image={require('../images/zhtx_cover.png')}
      blogtitle="百聘B端账号体系"
      blogtag="B端"
      bloglink="/zhtx"
    />
    
    <BlogCard
      image={require('../images/jhgf_cover.png')}
      blogtitle="APP交互规范"
      blogtag="C端"
      bloglink="/jhgf"
    />
    <BlogCard
      image={require('../images/task_cover.png')}
      blogtitle="搜狐资讯任务体系交互规范"
      blogtag="C端"
      bloglink="/task"
    />
    <BlogCard
      image={require('../images/publish_article_cover.png')}
      blogtitle="搜狐号SDK发布器"
      blogtag="B端"
      bloglink="/publish_article"
    />
    <BlogCard
      image={require('../images/liebian_cover.png')}
      blogtitle="裂变活动设计调研"
      blogtag="C端"
      bloglink="/liebian"
    />
    <BlogCard
      image={require('../images/h5web_cover.png')}
      blogtitle="可视化H5搭建平台"
      blogtag="B端"
      bloglink="/h5web"
    />
    <BlogCard
      image={require('../images/jiankang_cover.png')}
      blogtitle="搜狐资讯健康板块改版探索"
      blogtag="C端"
      bloglink="/jiankang"
    />
    <BlogCard
      image={require('../images/guess_cover.png')}
      blogtitle="搜狐资讯频道设置设计探索"
      blogtag="C端"
      bloglink="/guess"
    />
    </div>
    </div>

    <BottomGroup/>
    </div>
)

export default SecondPage
