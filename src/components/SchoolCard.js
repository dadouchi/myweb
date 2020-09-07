import React from 'react'
import './SchoolCard.css'

const SchoolCard = props => (
    <div className="SchoolCard">
        <img src={props.image} width='120'></img>
        <a>{props.time}</a>
        <a2>{props.schoolname}</a2>
        <a4>{props.degree}</a4>
        <a4>{props.major}</a4>
        <a3><span>{props.tag1}</span><span>{props.tag2}</span></a3>
        
      </div>

      
)

export default SchoolCard