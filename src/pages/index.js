import React from "react"
import { Link } from "gatsby"
import '../layout/index.css'


import Header from '../components/header'
import Title from'../components/Title'
import SchoolCard from '../components/SchoolCard'
import WorkCard from '../components/WorkCard'
import SoftwareCard from '../components/SoftwareCard'
import AbilityCard from '../components/AbilityCard'

import Image from "../components/image"
import SEO from "../components/seo"
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
        <p>现居北京，搜狐高级用户体验设计师。毕业于湖南大学，后前往英国伦敦大学玛丽女王学院学习媒体艺术并取得硕士学历。4年从业经验，专注于研交互设计的基础上不断拓展上下游的知识技能，包括UI、动效设计。除此之外，掌握一定的前端开发能力包括react、javascript、css。</p>
 
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
        content1="1、『搜狐资讯』产品线交互设计师和设计接口人，负责B端和C端的交互设计工作，涉及PC、WAP、小程序和APP。引入动效工具Principle，建立基于 Sketch的设计工作方式，担任 Chief Designer 重制『百聘C端改版1.0』产品上线一年帮助近2000万用户成功找到工作。" 
        content2="2、『糯米商家端』和『销售端』交互设计师，负责“资质认证、合约签订、账号监控”等板块的交互工作。" 
        
        />
        
        </div>

        <div className="WorkCard2">
        <WorkCard
        title1="UX Designer"
        title2="百度 | 百度百聘UED、糯米UED"
        title3="2016.10-2019.04"
        content1="1、『百度百聘』产品线交互设计师和设计接口人，负责B端和C端的交互设计工作，涉及PC、WAP、小程序和APP。引入动效工具Principle，建立基于 Sketch的设计工作方式，担任 Chief Designer 重制『百聘C端改版1.0』产品上线一年帮助近2000万用户成功找到工作。" 
        content2="2、『糯米商家端』和『销售端』交互设计师，负责“资质认证、合约签订、账号监控”等板块的交互工作。"
        />
        
        </div>
        

        <div className="Circlepic2"><img src={require('../images/circlepic.png')} ></img></div>
    </div>


 




   
    

    <div className="SoftwareCardGroup">
       

        <div className="DarkSection">
          <h1>UX Design &UI Design &Code</h1>
          <div className="Dkpic"><img src={require('../images/darksection.png')} ></img></div>
 

        </div>

        <div className="DarkSectionUX">
          <h1>PUBLISH</h1>
          <h2>ARTICLES ONLINE</h2>
          <a1>13</a1>
          <a2>46000</a2>
          <a3>Articles</a3>
          <a4>Pageviews</a4>
          <p>I trained myself as a full stack designer.I am a  designer who work with both user experience and illustation of website or application—meaning I can tackle projects that involve research,analysing problem,drawing framework,prototyping and building interface design.Besides,I passionate with front-end development.</p>
          <div id="animation2"></div>
        </div>

        <div className="DarkSectionUI">
          <h1>DESIGN</h1>
          <h2>SOFTWARE</h2>
          <p>I trained myself as a full stack designer.I am a  designer who work with both user experience and illustation of website or application—meaning I can tackle projects that involve research,analysing problem,drawing framework,prototyping and building interface design.Besides,I passionate with front-end development.</p>
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
          <p>I trained myself as a full stack designer.I am a  designer who work with both user experience and illustation of website or application—meaning I can tackle projects that involve research,analysing problem,drawing framework,prototyping and building interface design.Besides,I passionate with front-end development.</p>
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

    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
   </div>

    )
  }
}

export default IndexPage
