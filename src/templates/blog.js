import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Helmet } from 'react-helmet'


export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            seoDescription
            body {
                json
            }
        }
    }
`


const Blog = (props) => {
    const options = {
        renderNode: {
            'embedded-asset-block': (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                
                return <img alt={alt} src={url} />
            }
        }
    }


    return (
        <div>
        <Helmet>
            <html lang="en" />
            <title>Kitwe Blog | {props.data.contentfulBlogPost.title} | Copperbelt Zambia blogger articles freelance writer</title>
            <meta name="author" content="Ron Armengol" />
            <meta name="description" content={props.data.contentfulBlogPost.seoDescription} />
            {/* <meta name="description" content=" Copperbelt Zambia blogger articles freelance writer" /> */}
            <meta name="keywords" content={props.data.contentfulBlogPost.seoDescription} />
            {/* <meta name="keywords" content=" Blog articles, freelance writer blogger Ron Armengol Kitwe Copperbelt Zambia" /> */}
            <meta name="robots" content="index, follow" />
            <meta name="google-site-verification" content="vkn_1OZWK2FO3owAlOm0UP4SM3KNYlCVR3vPi52Ue94" />
        </Helmet>
        
            <Layout>    

                    <h1>{props.data.contentfulBlogPost.title}</h1>
                    <p>{props.data.contentfulBlogPost.publishedDate}</p>
                    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </Layout>
        </div>
    )
}

export default Blog