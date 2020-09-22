import React from 'react'
import { Link } from "gatsby"
import './ProjectCard.css'

const ProjectCard = props => (
    <div className="ProjectCard">
        <Link to={props.bloglink}>
        <img src={props.image} width='120'></img>
        <div className="ProjectCard2">
        <h1>{props.title}</h1>
        <p>{props.introduction}</p>
        <h2>{props.tag}</h2>
        
        </div>
        </Link>
      </div>

      
)

export default ProjectCard