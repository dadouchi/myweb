import React from 'react'
import './AbilityCard.css'

const AbilityCard = props => (
    <div className="AbilityCardGroup">
        <a>{props.num}</a>
        <h>{props.title}</h>
    <div className="AbilityCard">
        
        <img src={props.image1} width='50'></img>
        <img src={props.image2} width='50'></img>
      </div>
      </div>

      
)

export default AbilityCard