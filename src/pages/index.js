import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <div>

    <Helmet>
      <html lang="en" />
      <title>Kitwe Blogger</title>
      <meta name="author" content="Ron Armengol" />
      <meta name="description" content="This is a test for the SEO in Gatsby" />
      <meta name="keywords" content="This is a test for the SEO in Gatsby from Ron Armengol Kitwe" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="vkn_1OZWK2FO3owAlOm0UP4SM3KNYlCVR3vPi52Ue94" />
    </Helmet>
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm Ron, an aspiring full stack developer in Kitwe</h2>

    </Layout>
    </div>
  )
  
  
}

export default IndexPage