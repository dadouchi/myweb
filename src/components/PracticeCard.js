import React from 'react'
import './PracticeCard.css'
import { Link } from "gatsby"

const PracticeCard = props => (
    <div className="PracticeCard">
        <Link to={props.bloglink}>
        <img src={props.image} width='340px' ></img>
        </Link>
      </div>

      
)

export default PracticeCard