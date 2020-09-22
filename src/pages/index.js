import React from "react"
import { Link } from "gatsby"
import '../layout/index.css'


import Header from '../components/header'
import Title from'../components/Title'
import SchoolCard from '../components/SchoolCard'
import WorkCard from '../components/WorkCard'
import SoftwareCard from '../components/SoftwareCard'
import BottomGroup from '../components/BottomGroup'
import AbilityCard from '../components/AbilityCard'

import Image from "../components/image"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
const lottie = require("lottie-web")
const ScrollMagic=require("Scrollmagic")

class IndexPage extends React.Component{
  componentDidMount() {
    var element = document.getElementById("animation")
      lottie.loadAnimation({
      container: element, 
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../static/leidaobuxing.json') 
    });
    var element = document.getElementById("animation2")
    lottie.loadAnimation({
    container: element, 
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../static/working.json') 
    });

   //滚动动画SCROLLMAGIC
    var controller = new ScrollMagic.Controller();


    /*让第一个部分保持不动*/
    /*
    var pinSectionGroupScene= new ScrollMagic.Scene({
      triggerElement:'.SectionGroup',
      triggerHook:0.1,
      duration:'90%'
    })
      .setPin('.SectionGroup',{pushFollowers:false})
      .addTo(controller);
    */

    //第二部分的滚动动画
    var scene = new ScrollMagic.Scene({
      triggerElement:'.SchoolCardContent',
      
    })
    .setClassToggle('.SchoolCardContent','show')
    .addTo(controller);
    //第二部分滚动动画结束
    

  }

  render() {
    return (
  <div>
    <Header />
    
    <div className="SectionGroup">
    <div className="ToutuPic"><img src={require('../images/toutu.jpg')} width='100%'></img></div>
     <div id="animation"></div>
      <div className="SectionTitle">
        <h2>USER EXPERIENCE DESIGNER</h2>
        <h1>LYU FANG</h1>
        <div className="SectionContent">
           
            <img src={require('../images/icon_email.png')} width='20'></img>
            <a>1515513275@qq.com</a>
            <img src={require('../images/icon_iphone.png')} width='16'></img>
            <a>13126652270</a>
          </div>
        <p>现居北京，搜狐高级用户体验设计师。毕业于湖南大学，后前往英国伦敦大学玛丽女王学院学习媒体艺术并取得硕士学历。4年从业经验，专注于交互设计的基础上，不断拓展上下游的知识技能，包括UI、动效设计。除此之外，掌握一定的前端开发能力包括react、javascript、css。</p>
 
      </div>
    </div>



    
    <div className="SchoolCardGroup">
        <div className="SchoolGroup1">
        <div className="Circlepic"><img src={require('../images/circlepic.png')} ></img></div>
        <Title
        title1="ALWAYS KEEP STUDING"
         title2="EDUCATION"
         />  
        </div>
      
       <div className="SchoolCardContent">

          <SchoolCard
            image={require('../images/icon_zhongnanlin.png')}
            time="2010-2014"
            schoolname="中南林业科技大学"
            tag1="一本"
            tag2="湖南重点大学"
            degree="本科"
            major="工业设计"/>

          <SchoolCard
            image={require('../images/icon_hunan.png')}
            time="2014-2017"
            schoolname="湖南大学"
            tag1="985"
            tag2="211"
            degree="硕士"
            major="艺术设计"/>

          <SchoolCard
            image={require('../images/icon_london.png')}
            time="2015-2016"
            schoolname="伦敦大学玛丽女王学院"
            tag1="罗素集团"
            tag2="世界前100"
            degree="硕士"
            major="媒体艺术"/> 

         </div>   
         
      </div>   

    <Title
    title1="WOKRING HISTORY"
    title2="EXPERIENCE"
    />   

    <div className="WorkCardGroup">
        <div className="WorkImage1"><img src={require('../images/icon_drink.png')} width='124'></img> </div>
        <div className="WorkImage2"><img src={require('../images/icon_chart.png')} width='144'></img> </div>
        <div className="WorkImage3"><img src={require('../images/icon_box.png')} width='170'></img> </div>
        
        
        <div className="WorkCard1">
        <WorkCard
        title1="Senior UX Designer"
        title2="搜狐 | 智能媒体UED、搜狐资讯UED"
        title3="2019.04-NOW"
        content1="1、『搜狐资讯』产品线主设，承接所有运营活动的交互设计工作，包括『养鸡』、『春节集福卡』、『辟谣答题』，下载量达558万次，日活最高达100万。" 
        content2="2、『搜狐号』设计接口人，带领4人设计小组，提高用户体验。" 
        
        />
        
        </div>

        <div className="WorkCard2">
        <WorkCard
        title1="UX Designer"
        title2="百度 | 百度百聘UED、糯米UED"
        title3="2016.10-2019.04"
        content1="1、『百度百聘』产品线交互设计师，负责B端和C端的交互设计工作，涉及PC、WAP、小程序和APP。引入动效工具Principle，产品上线一年帮助近2000万用户成功找到工作。" 
        content2="2、『糯米商家端』和『销售端』交互设计师，负责“账号、店铺装修”等板块的B端交互工作。"
        />
        
        </div>
        

        <div className="Circlepic2"><img src={require('../images/circlepic.png')} ></img></div>
    </div>

    <div className="button">
            <a href="https://www.uisdc.com/u/38392#publish#hunter" target="_blank">细节体验</a>
            <a href="http://www.woshipm.com/u/298058" target="_blank">产品设计</a>
            
              <a>理论实践</a>
              <div className="buttonPic"><img src={require('../images/erweima.png')} ></img>
             </div> 
          </div>

  

    <div className="SoftwareCardGroup">
        <div className="DarkSection">
          <h1>UX Design &UI Design &Code</h1>
          <div className="Dkpic"><img src={require('../images/darksection.png')} ></img></div>
          <p1>搜狐UED全栈设计师，专注于交互设计。除此之外，掌握基础UI能力。基于sketch组件库设计方法，并引入lottie、principle动效,帮助团队提升体验。并具备基础前端技术react、javescript、css等。</p1>
     

         </div>

        <div className="DarkSectionUX">
          <h1>PUBLISH</h1>
          <h2>ARTICLES ONLINE</h2>
          <a1>13</a1>
          <a2>6.5w</a2>
          <a3>文章数</a3>
          <a4>总阅读</a4>
          <p> 『优设网』细节猎人栏目作者、『人人都是产品经理』网站自媒体作者</p>
         <div id="animation2"></div>

        </div>

        <div className="DarkSectionUI">
          <h1>DESIGN</h1>
          <h2>SOFTWARE</h2>
          <p>竞品分析、可用性测试、原型设计、UI设计、动效设计、设计管理</p>
          <div className="SoftwareCardc">
            <SoftwareCard
              title1="AXURE"
              image={require('../images/logo-axure.png')}/>
            <SoftwareCard
              title1="SKETCH"
              image={require('../images/logo-sketch.png')}/>
            <SoftwareCard
              title1="INVISION"
              image={require('../images/logo-invision.png')}/>
            <SoftwareCard
              title1="FIGMA"
              image={require('../images/logo-figma.png')}/>
              <SoftwareCard
              title1="PRINCIPLE"
              image={require('../images/logo-principle.png')}/>
              <SoftwareCard
              title1="FRAMER"
              image={require('../images/logo-framer.png')}/>
            <SoftwareCard
              title1="PS"
              image={require('../images/logo-photoshop.png')}/>
            <SoftwareCard
              title1="AI"
              image={require('../images/logo-illustrator.png')}/>
            <SoftwareCard
              title1="AE"
              image={require('../images/logo-affter effects.png')}/>
            
            </div>
        </div>

     

        <div className="DarkSectionCode">
          <h1>FRONT-END</h1>
          <h2>SKILL</h2>
          <p>前端网页基础开发</p>
          <div className="SoftwareCardd">
            <SoftwareCard
              title1="HTML"
              image={require('../images/logo-html.png')}/>
            <SoftwareCard
              title1="CSS"
              image={require('../images/logo-css.png')}/>
            <SoftwareCard
              title1="JAVASCRIPT"
              image={require('../images/logo-js.png')}/>
            <SoftwareCard
              title1="REACT"
              image={require('../images/logo-react2.png')}/>
            <SoftwareCard
              title1="MARKDOWN"
              image={require('../images/logo-markdown.png')}/>
            </div>
        </div>
        <h3>DESIGN</h3>
        <h4>CODE</h4>
      </div>


      <div className="Foot">
      <div className="Circlepic3"><img src={require('../images/circlepic.png')} ></img></div>
      </div>
     
     <div className="ProjectSection">
      <Title
    title1="RECENT WORKS"
    title2="PROJECT"
    /> 
      <div className="PojectCardGroup">
      <ProjectCard
        image={require('../images/bpyd_cover.png')}
        title="百度百聘C端项目总结"
        introduction="百度旗下的招聘产品，专注于服务于蓝领。本文将围绕“提高简历数量和质量”、“提升投递率”、“提升老用户留存比例”三个方面来进行阐述。"
        tag="C端 · APP"
        bloglink="/bpyd"
      />
      <ProjectCard
        image={require('../images/gongshi_cover.png')}
        title="运营活动公式"
        introduction="“春节集福卡”、“养鸡”、“辟谣答题”、“春节祝福卡”、“周周分狐币”等活动完成有一段时间了，本文着重分析了这些活动背后共同的规律进行介绍。"
        tag="C端 · APP"
        bloglink="/gongshi"
      />
      <ProjectCard
        image={require('../images/jhgf_cover.png')}
        title="交互基础规范"
        introduction="我们通常讨论的比较多的是UI规范，对于UE的规范较少一些，本文从“转场”、“缺省”、“加载”三个方面梳理，统一交互规范,来提高设计效率，保证一致性"
        tag="C端 · APP"
        bloglink="/jhgf"
      />
      <ProjectCard
        image={require('../images/zhtx_cover.png')}
        title="账号体系项目总结"
        introduction="账号体系是B端平台的底层系统，本人对用户注册、登录和认证等账号功能设计进行了分析，结合相关流程总结了自己的思考和理解，总结归纳。"
        tag="B端 · PC"
        bloglink="/zhtx"
      />
      </div>
      </div>
      <BottomGroup />

    <SEO title="Home" />

   </div>

    )
  }
}

export default IndexPage
