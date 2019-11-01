import React from "react"
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Badge } from 'reactstrap';
import { Helmet } from "react-helmet"
import Img from 'gatsby-image'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Layout from "../components/layout"

import '../styles/global.css'

export default ({data}) => {

  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  let authorPic = post.frontmatter.authorPic.childImageSharp.fluid

  return (
    <Layout>
      <main style={{ marginTop: '80px' }}>
      <Helmet title={`MM Science | ${post.frontmatter.title}`} />

      
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 singal_content">
            <div className="article">
              <Img fluid={featuredImgFluid} loading="lazy" />
              <div className="article__content" style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)'}}>
                <h2>{post.frontmatter.title}</h2>
                <div className="article_role_play">
                  <div className="article_owner">
                    <img src={authorPic.src} alt={post.frontmatter.author} className="author__pic"/>
                  </div>
                  <div className="article__profile">
                    <span className="article__name">{post.frontmatter.author}</span>
                    <div>
                      <span className="article__meta" style={{ color: 'var(--appBar-text)'}}> 
                        {post.frontmatter.date} · {post.timeToRead} min read 
                      </span>
                    </div>
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

        <Typography variant="body2">
          Awesome articles
        </Typography>
        <div className="other_stories">

        <Grid container spacing={3} 
      css={css`
        padding-top: 10px;
      `}>
          
        {data.allMarkdownRemark.edges.map(({ node }) => (
            
          <Grid item xs={12} sm={4} 
            key={node.id} 
            css={css`
              @media screen and (max-width: 700px) {
                padding: 0 !important;
              }            
          `}>
            <div className="blog__post__items" >
              <div 
                css={css`
                  @media screen and (max-width: 700px) {
                    padding: 10px;
                  }
                `}
              >
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} 
                css={css`
                  @media screen and (max-width: 700px) {
                    box-shadow: none;
                    border-radius: 20px;
                  }
                `}/>
              </div>
              <div 
              style={{ backgroundColor: 'var(--appBar-bg)', color: 'var(--appBar-text)'}}
              css={css`
                padding: 1rem 1rem;
                @media screen and (max-width: 700px) {
                  border-radius: 20px;
                }
              `}>
                <Link
                  to={node.fields.slug}
                  alt={node.fields.slug}
                  css={css`
                    text-decoration: none;
                    color: inherit;
                `}>
                  <Typography variant="body2" 
                  css={css`
                    font-family: 'Rubik', 'Pyidaungsu', sans-serif;
                  `}> 
                    {node.frontmatter.title}
                  </Typography>
                  <Typography paragraph style={{ margin: '0'}}>
                    {node.excerpt}
                  </Typography>
                </Link>
                <div className="article__label"> 
                  <Badge color="success">{node.frontmatter.tags}</Badge>  
                </div>
                <span className="article__meta" style={{ color: 'var(--appBar-text)'}}> 
                  {node.frontmatter.date} · {node.timeToRead} min read 
                </span>
              </div>
            </div>
          </Grid>
          
        ))}
      </Grid>
    
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        authorPic {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
        date(formatString: "MMM DD")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
      timeToRead
    }
    allMarkdownRemark(limit: 3, sort: {order: DESC, fields: frontmatter___tags}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM, YYYY")
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`

