import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout'
import contactStyles from './contact.module.css'

const IndexPage = () => {
  return (
    <div>
    <section className={contactStyles.background}>

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
      <h1>Hello,</h1>
      <h2>I'm Ron, an aspiring full stack developer in Kitwe</h2>

    </Layout>
    </section>
    </div>
  )
  
  
}

export default IndexPage