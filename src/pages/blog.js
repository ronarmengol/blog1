import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import headerStyles from '../components/header.module.scss'
import contactStyles from './contact.module.css'

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
            <title>Kitwe Blogger Ron Armengol Blog Copperbelt Zambia Life</title>
            <meta name="author" content="Ron Armengol" />
            <meta name="description" content="Blog articles, freelance writer blogger Ron Armengol Kitwe Copperbelt Zambia" />
            <meta name="keywords" content="Blog articles, freelance writer blogger Ron Armengol Kitwe Copperbelt Zambia" />
            <meta name="robots" content="index, follow" />
            <meta name="google-site-verification" content="vkn_1OZWK2FO3owAlOm0UP4SM3KNYlCVR3vPi52Ue94" />
        </Helmet>
            
        <section className={contactStyles.background2}>

            <Layout>
            <h1 className={headerStyles.title}>Kitwe Blog</h1>

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
         </section>
        </div>
        
    )
}

export default BlogPage