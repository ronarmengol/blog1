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
        Below, I hope to share all the tools and lessons I learn in this new and exciting journey and in the blog page I will basically pen down random thoughts and ideas.
        <br></br>
        If you are an aspiring programmer in Zambia, I would love to hear from you. I am actually feeling overwhelmed with how much I need to learn...lol.
      </p>
    </section>

    <section className={layoutStyles.container2}>
        <h1>Writing tools</h1>
        <h5>Install grammarly, the best blog tool.</h5>
        <p>Poor grammar and bad spelling will definitely make any writer look amateur. Grammarly is amazing it assists in checking your spelling, grammar and punctuation. And reminds you if sentences are too windy.</p>
        <h5>Thesaurus and Dictionary</h5>
        <p>Do not get mixed up with similar sounding words like inspire, and aspire, double check you have used the right word to express your content. Spice up your content with variety of synonyms with an online Thesaurus. </p>
    </section>

    <section className={layoutStyles.container2}>
        <h1>SEO</h1>
        <h6>Search Engine Optimization</h6>
        <p>Search Engine Optimization simply put is the implementation of making your website user and search engine friendly for the purpose of attracting organic traffic (without the use of Ads) to your website.</p>
        <h5>LSI keywords</h5>
        <p>In the past google would scan your website and check for keywords and keyword density. This was a computer algorithm, simply explained: if you mentioned chicken enough times, google would index you as a possible chicken expert...lol, okay probably a chicken farmer, producer, trader etc. So basically if you mentioned a keyword enough times, google will conclude your webpage if about that many-times-mentioned keyword.</p>
        <h5>Speed</h5>
        <p>No one wants a slow website, apparently neither does google. Google will rank your page unfavourably if it downloads too slowly. The first week of August 2020</p>
        <h1>Miscellaneous</h1>
        <h6>Timeline</h6>
        <ul>
          <li>14th July 2020 - posted my first post</li>
          <li>28th July 2020 - applied SEO on my blog</li>
          <li>29th July 2020 - ranked 32 with Kitwe Blog keywords</li>
          <li>8th August 2020 - ranked 4 with Kitwe Blog keywords</li>
        </ul>
        <h1>Technicals</h1>
        <h6>The boring geeky stuff</h6>
        <p>The first week of August I have been struggling to work on website speed. I don't work on my blog speed for my blog site because it runs under a Gatsby framework which is renowned for speed</p>
    </section>
    

      <div style={{textAlign: `center`}}>
      <Footer />
      </div>
    </div>
  )
  
  
}

export default IndexPage