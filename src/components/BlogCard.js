import React from 'react'
import './BlogCard.css'
import { Link } from "gatsby"

const BlogCard = props => (
    <div className="BlogCard">
        <Link to={props.bloglink}>
        <img src={props.image} width='340px' ></img>
        <div className="BlogCt">
        <h1>{props.blogtitle}</h1>
        <p2>{props.blogtag}</p2>
        </div>
        </Link>
      </div>

      
)

export default BlogCard