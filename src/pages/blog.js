import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost(sort: {order: DESC, fields: publishedDate}) {
                edges {
                  node {
                    title
                    slug
                    publishedDate(formatString: "MMMM Do YYYY")
                  }
                }
              }
        }
    `)


    return (
        <div>
        <Helmet>
      <html lang="en" />
      <title>Gatsby SEO PWA test Ron Armengol Kitwe Zambia</title>
      <meta name="author" content="Ron Armengol" />
      <meta name="description" content="This is a test for the SEO in Gatsby" />
      <meta name="keywords" content="This is a test for the SEO in Gatsby from Ron Armengol Kitwe" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="" />
    </Helmet>
        <Layout>

            <h1>Blog</h1>
            <ol className={blogStyles.posts}>

                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>

                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
            })}
            </ol>
        </Layout>
        </div>
        
    )
}

export default BlogPage