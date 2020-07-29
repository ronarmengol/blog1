import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <div>
            <Helmet>
      <html lang="en" />
      <title>Gatsby SEO PWA test Ron Armengol Kitwe Zambia</title>
      <meta name="author" content="Ron Armengol" />
      <meta name="description" content="This is a test for the SEO in Gatsby" />
      <meta name="keywords" content="This is a test for the SEO in Gatsby from Ron Armengol Kitwe" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="vkn_1OZWK2FO3owAlOm0UP4SM3KNYlCVR3vPi52Ue94" />
    </Helmet>
        <Layout>

            <h1>Contact</h1>
            <p>My number 0966 232544</p>
            <p>go to <a href="https://google.com" rel="noreferrer" target="_blank">google</a></p>

        </Layout>
        </div>
    )
}

export default ContactPage