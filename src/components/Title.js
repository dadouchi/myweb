import React from 'react'
import './Title.css'


const Title = props => (
        <div className="Title">
        <a>{props.title1} </a>
        <h2>{props.title2}</h2>
        </div>
)

export default Title