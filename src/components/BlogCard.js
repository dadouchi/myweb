import React from 'react'
import './BlogCard.css'
import { Link } from "gatsby"

const BlogCard = props => (
    <div className="BlogCard">
        <Link to={props.bloglink}>
        <img src={props.image} width='350px' ></img>
        <a>{props.blogtitle}</a>
        <a2>{props.blogtag}</a2>
         </Link>
      </div>

      
)

export default BlogCard