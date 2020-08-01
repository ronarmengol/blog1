import React from 'react'
import { Helmet } from 'react-helmet'

import layoutStyles from '../components/layout.module.scss'
import contactStyles from './contact.module.css'
import Footer from '../components/footer'
import Header from '../components/header'


const IndexPage = () => {
  return (
    <div>

    <Helmet>
      <html lang="en" />
      <title>Kitwe Blogger writer freelance Ron Armengol Blog Copperbelt Zambia Life</title>
      <meta name="author" content="Ron Armengol" />
      <meta name="description" content="Blog articles, freelance writer blogger Ron Armengol Kitwe Copperbelt Zambia" />
      <meta name="keywords" content="Blog articles, freelance writer blogger Ron Armengol Kitwe Copperbelt Zambia" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="vkn_1OZWK2FO3owAlOm0UP4SM3KNYlCVR3vPi52Ue94" />
      <meta name="canonical" href="https://ron-armengol-blog.netlify.app"/>
    </Helmet>

    <section className={contactStyles.background}>
    <div className={layoutStyles.container}>
      <Header />
            <div className={layoutStyles.content}>
            </div>

        </div>
    </section>

    <section className={layoutStyles.container2}>
      <p style={{fontSize: `3rem`}}>Hi,</p>
      <h2>I'm Ron, an aspiring web developer and <em>blogger</em>.</h2>
      <p>
        I have now learned enough to open up my own website, and store content in a cloud database. I am not a writer, but definitely want to aspire to be a better one. I did not want to start blogging when I felt good enough to write, I know this would lead to gross procrastination, I think with any grand plans, we should just dive in, and learn as we go along.
        <br></br>
        I hope to share all the tools and lessons I learn in this new and exciting journey.
      </p>
        <h3>Install grammarly, the best blog tool.</h3>
        <p>Poor grammar and bad spelling will definitely make any writer look amateur. Grammarly is amazing it assists in checking your spelling, grammar and punctuation. And reminds you if sentences are too windy.</p>
    </section>
      <div style={{textAlign: `center`}}>
      <Footer />

      </div>
    </div>
  )
  
  
}

export default IndexPage