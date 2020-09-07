import React from "react"
import { Link } from "gatsby"

import Header from '../components/header'
import SEO from "../components/seo"
import BlogCard from '../components/BlogCard'
import { node } from "prop-types"


const ThirdPage = props => {
  const postList=props.data.allMarkdownRemark

  return(
  <div>
      <Header />
      <div className="BlogGroup">
        {postList.edges.map(({ node }, i) => (
      <Link to={node.frontmatter.path} key={i}>
      <BlogCard
      blogtitle={node.frontmatter.title}
      blogtag={node.frontmatter.date}
      image={node.frontmatter.image.childImageSharp.sizes.src}
      />
      </Link>
        ))}
      </div>
      
    <SEO title="Page two" />
    <h1>真的想哭</h1>
    <p>好烦</p>
    <Link to="/">Go back to the homepage</Link>
    ))}  
  </div>
  
)}

export default ThirdPage

export const listQuery=graphql`
    query ListQuery{
      allMarkdownRemark(sort: { order:DESC, fields:[frontmatter___date] }) {
        edges{
          node{
            html
            id
            frontmatter{
              date(formatString:"MMMM DD YYYY")
              path
              title
              
              image{
                childImageSharp{
                  sizes(maxWidth:300){
                    src
                  }

                  }
                }
              }
            }
          }
        }
      }
    
`
