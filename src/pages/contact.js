import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <div>
            <Helmet>
      <html lang="en" />
      <title>Kitwe Blogger Ron Armengol Blog Copperbelt Zambia Life</title>
      <meta name="author" content="Ron Armengol" />
      <meta name="description" content="Blog articles on Life etc by Ron Armengol Kitwe Copperbelt Zambia" />
      <meta name="keywords" content="Blog articles on Life ete by Ron Armengol Kitwe Copperbelt Zambia" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="vkn_1OZWK2FO3owAlOm0UP4SM3KNYlCVR3vPi52Ue94" />
    </Helmet>
        
        <Layout>

            <h1>Contact</h1>
            <p>My number 0966 232544</p>

        </Layout>
        </div>
    )
}

export default ContactPage