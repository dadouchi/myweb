import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Posttop from '../components/Posttop'
import Header from '../components/header'
import Img from "gatsby-image"
import { Link } from "gatsby"
import '../layout/blogTemplate.css'

function Template(props){
  const post = props.data.markdownRemark
  
  const {title,date,image}=props.data.markdownRemark.frontmatter

  return (
    <div>
        <Header />
        
        <Posttop
          title={title}
          subtitle={date}
          image={image.childImageSharp.sizes.src}
          /> 

        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html:post.html }}
        />
        <Link to="/page-3">Go back to the PAGE-3</Link>
      </div>
    
  )
}
export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image{
          childImageSharp{
            sizes{
              src
            }
          }
        }
        }
      }
    }
  
`