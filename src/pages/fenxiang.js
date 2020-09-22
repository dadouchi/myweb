import React from "react"
import { Link } from "gatsby"
import '../layout/fenxiang.css'

import Header from '../components/header'
import SEO from "../components/seo"
import BottomGroup from '../components/BottomGroup'

const FenxiangPage = () => (
  
    <div>
    <Header />
    <SEO title="fenxiang" />
    <div className="ArticleContent">
        <div className="ArticleTop">
            <img src={require('../images/icon_back.png')} ></img>
            <a><Link to="/page-2">返回</Link></a>
        </div>
        <h1>交互设计自查表</h1>
        <p>交互设计自查，是设计师完成交互稿后，自己发现问题查漏补缺的必要环节。交互稿考虑的细节是否完善，对特殊状态的描述是否有遗漏，对网络环境、交互控件等说明是否详细说明？对于移动端应用来说，使用场景非常复杂多变，设备也很多样化。及时自己发现手误、考虑细节不完善之处、异常状态的遗漏，不但避免了Review时的尴尬场面，也有利于设计师自己形成更为缜密的思考方式，从而让自己的设计质量得到快速的提高。</p>
    
        <p>接下来，我将从4个方面来进行介绍。</p>
        <h2>1、承接需求</h2>
        <img src={require('../images/fenxiang003.jpeg')} ></img>
        <img src={require('../images/fenxiang004.jpeg')} ></img>
        <img src={require('../images/fenxiang005.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>2、框架流程</h2>
        <img src={require('../images/fenxiang007.jpeg')} ></img>
        <img src={require('../images/fenxiang008.jpeg')} ></img>
        <img src={require('../images/fenxiang009.jpeg')} ></img>
        <img src={require('../images/fenxiang010.jpeg')} ></img>
        <img src={require('../images/fenxiang012.jpeg')} ></img>
        <img src={require('../images/fenxiang013.jpeg')} ></img>
        <img src={require('../images/fenxiang014.jpeg')} ></img>
        <img src={require('../images/fenxiang015.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>3、详细设计</h2>
        <img src={require('../images/fenxiang017.jpeg')} ></img>
        <img src={require('../images/fenxiang018.jpeg')} ></img>
        <img src={require('../images/fenxiang019.jpeg')} ></img>
        <img src={require('../images/fenxiang020.jpeg')} ></img>
        <img src={require('../images/fenxiang021.jpeg')} ></img>
        <img src={require('../images/fenxiang022.jpeg')} ></img>
        <img src={require('../images/fenxiang023.jpeg')} ></img>
        <img src={require('../images/fenxiang024.jpeg')} ></img>
        <img src={require('../images/fenxiang025.jpeg')} ></img>
        <img src={require('../images/fenxiang026.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>4、设计走查</h2>
        <img src={require('../images/fenxiang028.jpeg')} ></img>
        <br />
        <br />
        <br />
        <br />
        <h2>5、最后</h2>
        <p>移动场景很复杂，除了软硬件特性、网络特性、流程路径控件表现、内容、用户个人属性、特殊情景以外，影响因素还很多。正确分析并记录各种影响因素，处理好并运用到设计中，都能使产品的体验获得更好的提升，并且在此提升过程中，我们可以将他们形成规范。每个迭代版本做新功能时，我们可以把新增的影响因素添加进去，留待后续的交互设计自查。这样积累下来，我们提前考虑到的异常点就会越来越多，从而考虑得会越来越完善，效率越来越高。</p>
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

export default FenxiangPage