import React from 'react'
import './SoftwareCard.css'

const SoftwareCard = props => (
        <div className="SoftwareCard">
        
        <a>{props.title1} </a>
        <img src={props.image} width='50'></img>
        </div>
)

export default SoftwareCard