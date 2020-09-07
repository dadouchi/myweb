import React from "react"
import { Link } from "gatsby"

import Header from '../components/header'
import SEO from "../components/seo"
import BlogCard from '../components/BlogCard'
import '../layout/page-2.css'
const SecondPage = () => (
  
    <div>
     <Header /> 
    <SEO title="Page two" />
 

    <div className="BlogGroup">
    <BlogCard
      image={require('../images/bpyd_18.png')}
      blogtitle="百度百聘C端2018-2019年度总结"
      blogtag="项目"
      bloglink="/bpyd"
    />
    <BlogCard
      image={require('../images/gongshi001.jpeg')}
      blogtitle="搜狐资讯运营交互总结"
      blogtag="项目"
      bloglink="/gongshi"
    />
    <BlogCard
      image={require('../images/fenxiang001.jpeg')}
      blogtitle="交互设计自查表"
      blogtag="总结"
      bloglink="/fenxiang"
    />
    <BlogCard
      image={require('../images/zhtx_7.png')}
      blogtitle="百聘B端账号体系"
      blogtag="项目"
      bloglink="/zhtx"
    />
    
    <BlogCard
      image={require('../images/jhgf_1.png')}
      blogtitle="APP交互规范"
      blogtag="规范"
      bloglink="/jhgf"
    />
    <BlogCard
      image={require('../images/task_2.png')}
      blogtitle="搜狐资讯任务体系交互规范"
      blogtag="规范"
      bloglink="/task"
    />
    <BlogCard
      image={require('../images/publish_article002.jpeg')}
      blogtitle="搜狐号SDK发布器"
      blogtag="项目"
      bloglink="/publish_article"
    />
    <BlogCard
      image={require('../images/liebian_1.png')}
      blogtitle="裂变活动设计调研"
      blogtag="调研"
      bloglink="/liebian"
    />
    <BlogCard
      image={require('../images/h5web001.jpeg')}
      blogtitle="可视化H5搭建平台"
      blogtag="创新"
      bloglink="/h5web"
    />
    <BlogCard
      image={require('../images/jiankang001.jpeg')}
      blogtitle="搜狐资讯健康板块改版探索"
      blogtag="探索"
      bloglink="/jiankang"
    />
    <BlogCard
      image={require('../images/guess001.jpeg')}
      blogtitle="搜狐资讯频道设置设计探索"
      blogtag="探索"
      bloglink="/guess"
    />
    </div>

    </div>
)

export default SecondPage
