import React from 'react'
import './WorkCard.css'

const WorkCard = props => (
        <div className="WorkCard">
         
         <a>{props.title1}</a>
         <h1>{props.title2}</h1>
         <h2>{props.title3}</h2>
         <p1>{props.content1}</p1>
         <p2>{props.content2}</p2>
         </div>
)

export default WorkCard