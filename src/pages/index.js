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
        
        <h5>Search Engine Optimization</h5>
        <p>Search Engine Optimization simply put is the implementation of making your website user and search engine friendly for the purpose of attracting organic traffic (without the use of Ads) to your website.</p>
        
        <h5>LSI keywords</h5>
        <p>In the past google would scan your website and check for keywords and keyword density. This was a computer algorithm, simply explained: if you mentioned chicken enough times, google would index you as a possible chicken expert...lol, okay probably a chicken farmer, producer, trader etc. So basically if you mentioned a keyword enough times, google will conclude your webpage if about that many-times-mentioned keyword.</p>
        
        <h5>Typography</h5>
        <p>Overall layout of the web document</p>
        <ul>
          <li>Do not forget to fill in the title</li>
          <li>Fill in the keywords and description meta tags</li>
          <li>Populate the h1 and h2 tags with the appropriate keywords</li>
          <li>SEO copywriting plan for 2-3 percent keyword density on content</li>
          <li>fill in the alt and title tags for images</li>
        </ul>

        <h5>Speed</h5>
        <p>No one wants a slow website, apparently neither does google. Google will rank your page unfavourably if it downloads too slowly. Google wants users of their engine to have a good website experience and one important criteria is speed. Google from their own research and analytics say that website speed is the first impression a client has over the internet.</p>
        <ul>
          <li>delay render blocking scripts</li>
          <li>delay loading images below viewport</li>
          <li>use correct image formats</li>
          <li>do not use oversized images</li>
          <li>use responsive imaging for mobile users</li>
          <li>switch off autoplay if you have videos</li>
          <li>check browser console for errors</li>
          <li>load CSS asycnchronously</li>
          <li>choose CDN CSS over downloaded source files</li>
          <li>use inline CSS for items on load page viewport</li>

        </ul>


        <h1>Responsive website</h1>
        <h5>Layout</h5>
        <p>A responsive website is not referring to a fast website. A responsive is a website that is mobile friendly. I design and build the webpage on a laptop, and I can see the effects of my code on the look of the website on a large screen. I must also take into account, how this will look on a smaller mobile screen. How can we put content that is designed on a large screen and put this into a smaller screen with a different display aspect ratio?</p>
        <p>A website that is not responsive can take on two looks:</p>
        <ul>
          <li>
            The image and text shrinks so everything is squeezed into the width of the small mobile screen viewport. This makes the text difficult to read and the images unclear.
          </li>
          <li>
            Another alternative is maintain the image and text size but the images and text 'overflows' from the side of the phone.
          </li>
        </ul>
        <p>
        The programmer solves by using a grid layout and media queries breakpoints. This makes the layout of the webpage dynamic. In simple terms this is moving content that is stacked horizontally and making them stack vertically as the screen width reaches certain breakpoints (specified pixel widths).</p>
        <p>If you are a beginner, containerize (or wrap) your content in a div that has a max-width of say 600px that is text centered on the screen. Here you do not need to worry about columns changing in a smaller viewport. It is important to reduce the text width because it is tiring for readers to read text that compasses the full width of the laptop or desktop screen. </p>
        <h5>Images</h5>
        <p>Responsive images is the concern of images reacting to the viewport. Images naturally resize to the parent container (html div tag) unless we put a fixed width and height to the image. This is not pure responsiveness. My laptop pixel dimension is about 1350 by 6</p>


        <h1>Miscellaneous</h1>
        <h5>Timeline</h5>
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