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
      <title>Blogger Zambia Copperbelt Kitwe | 2020 blog </title>
      <meta name="author" content="Ron Armengol" />
      <meta name="description" content="Blogger, Zambia, Copperbelt, Kitwe freelance blog writer | home page | Ron Armengol | introduction" />
      <meta name="keywords" content="Blog articles, freelance writer blogger Ron Armengol Kitwe Copperbelt Zambia" />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="vkn_1OZWK2FO3owAlOm0UP4SM3KNYlCVR3vPi52Ue94" />
      <meta name="canonical" href="https://ron-armengol-blog.netlify.app"/>

      <script type="application/ld+json">
          {{
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Ron Armengol Blog",
            "url": "https://ron-armengol-blog.netlify.app",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ron-armengol-blog.netlify.app/search?={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }}
      </script>
    </Helmet>

    <section className={contactStyles.background}>
    <div className={layoutStyles.container}>
      <Header />
            <div className={layoutStyles.content}>
            </div>

        </div>
    </section>

    <section className={layoutStyles.container2}>
      <p style={{fontSize: `3rem`}}>Hi, I am Ron,</p>
      <h1>web developer (designer) in Zambia</h1>
      <h2 style={{display: `none`}}>Blogger blog zambia</h2>
      <p>
        I have now learned enough to open up my own website, and store content in a cloud database CMS. I am an aspiring to be a better writer. I did not want to start <em><strong>blogging</strong></em> when I felt good enough to write, I know would have ended up never starting, I think with any grand plans, we should just dive in, and learn as we go along.
        <br></br>
        Below, I hope to share all the tools and lessons I learn in this new and exciting journey of <em><strong>blogging</strong></em> and programming, and in the <em><strong>blog`</strong></em> page I will basically pen down random thoughts and ideas.
        <br></br>
        I am extremely fortunate that the Covid 19 restrictions have not hindered my pursuit of programming. I am currently in <em>Kitwe</em>, <em>Zambia</em>, writing this <em><strong>blog</strong></em>. I love it here in Kitwe, its a small city, and little traffic. Generally in the <em>Copperbelt</em> it is quiet compared to the capital Lusaka.
      </p>
      <p>
        I am not using the Wordpress platform or any other website builder. I am using HTML, CSS and Javascript for other websites I build. But for this <em><strong>blog</strong></em> I am using React in the Gatsby platform with the Contentful CMS.
      </p>
      <p>
        If you are in Kitwe, Ndola, Lusaka or anywhere in Zambia and you are seriously considering thinking of programming or web development, you do not need to go out of the country. There is enough resources on the internet to learn. 
      </p>
      <h3>Wix and other website builders</h3>
      <p>
        I made a website for my sister, it took me 2 days to make. A simple website to show pictures of her beagles. I struggled. I noticed there seems to be a big gap between what I can do and what she expects. Eventually she was moderately happy. That is not a good sign. The customer should be super happy. She also embarked using a website builder, and she choose Wix. She has no experience building websites and no coding. I was not so shocked when she produced a website that looked better than mine.
      </p>
      <p>
        The point I am trying to make here is, if you want to just be making websites as a career, website builders such as Wix can put you out of business very quickly. It advocates making high quality websites almost for free. And as an average web developer you will (not match up), unless you offer something better than wix, squarespace or webflow. I believe these are the top 3 builders. I have excluded Wordpress, and that is another web builder on a league of its own. 
      </p>
      <p>
        I am not planning to be looking at Wix or the other builders any time soon. I feel the pressure to get my programming skills up first. But just a few notes. Wix is free for the first year. The second year will cost about $14.95 for hosting using the Wix domain name extension. If you do decide to go for the free package, Wix will advertise their website on the top of your website. You also cannot remove your wix website from their platform. So that means you are forced to use their hosting facilities only.
      </p>

    </section>

    <section className={layoutStyles.container2}>
      

        <h2>Writing tools</h2>
        <p style={{display: `none`}}>zambia</p>
        <h5>Install grammarly, the best <em><strong>blog</strong></em> tool.</h5>
        <p>Poor grammar and bad spelling will definitely make any writer look amateur. Grammarly is amazing it assists in checking your spelling, grammar and punctuation. And reminds you if sentences are too windy.</p>
        <h5>Thesaurus and Dictionary</h5>
        <p>Do not get mixed up with similar sounding words like inspire, and aspire, double check you have used the right word to express your content. Spice up your content with variety of synonyms with an online Thesaurus. </p>
    </section>

    <section className={layoutStyles.container2}>
        <h2>SEO</h2>
        
        <h5>Search Engine Optimization</h5>
        <p>Search Engine Optimization simply put is the implementation of making your website search engine friendly for the purpose of attracting organic traffic (without the use of Ads) to your website.</p>
        
        <h5>LSI keywords</h5>
        <p style={{display: `none`}}>zambia</p>
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
        <h2 style={{display: `none`}}>Blogger blog zambia</h2>
        <p>No one wants a slow website, apparently neither does google. Google will rank your page unfavourably if it downloads too slowly. Google wants users of their engine to have a good website experience and one important criteria is speed. Google from their own research and analytics say that website speed is the first impression a client has over the internet.</p>
        <p>
          Gatsby as a static site generator, which means it converts the back-end development language (React) into native HTML, CSS and Javascript code. <br />
          Gatsby is well known for its inherent speed. This means you do not need to add additional code and speed analysis to your program to optimize web speed. 
        </p>
        <p>
          However, if you want to use the native browser languages or platforms you have to get your hands a little dirty to ensure that your website runs faster. Here are a few tips which are on my checklist to maximise website speed.
        </p>
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


        <h2>Responsive website</h2>
        <h5>Layout</h5>
        <h2 style={{display: `none`}}>Blogger</h2>
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
        <p>Responsive images is the concern of images reacting to the viewport. Images naturally resize to the parent container (html div tag) unless we put a fixed width and height to the image. This is not pure responsiveness. My laptop pixel dimension is about 1350 by 650</p>

        

        <h2 style={{marginTop: `2rem`, marginBottom: `1rem`}}>Miscellaneous</h2>
        <h5>Timeline</h5>
        <h2 style={{display: `none`}}>Blogger</h2>
        <p>
          14th July 2020 - posted my first <em><strong>blog</strong></em> post <br />
          28th July 2020 - applied SEO on my <em><strong>blog</strong></em>. <br />
          29th July 2020 - ranked 32 with Kitwe Bloggers keywords <br />
          8th August 2020 - ranked 4 with Kitwe Bloggers keywords <br />
          18th August 2020 - I did not appear at all for keywords Zambia blogger. Inserted some SEO for Zambia. <br />
          20th August 2020 - ranked 3 with <em>Kitwe blogger</em> keywords and ranked 3 with <em>Copperbelt blogger</em>. <br />
          20th August 2020 - ranked 136 with Zambia Blogger keywords and ranked 3 with <em>Copperbelt blogger</em><br />
          2nd September 2020 - ranked 1 with Copperbelt blogger or Copperbelt blogger <br />
          2nd September 2020 - ranked 1 with Kitwe Blogger and or blogger Kitwe <br />
          2nd September 2020 - ranked 20 with blogger zambia and 46 with zambia blogger <br />

        </p>

        
        <p>
          I have kept the time line above to show the effect of SEO to the <em><strong>blog</strong></em> post. It is important to note that even though your SEO is good, it still takes time to rank above a website whose SEO score is lower than yours.
        </p>
        <p>
          What is also very important to note that the google searcher can also affect the results by the order he puts the keywords into the search engine as demonstrated in the Timeline for 2nd September 2020. I am not sure why this happens. Definitely need more research and I will add to this post later on.
        </p>
        <p>
          Another issue I must raise, is that over time this <em><strong>blog</strong></em> page has increased in content. I am certain the increase in content has a positive effect over the SEO for the <em>blogging</em>.
        </p>
        <p>
          I must also give a little credit to my SEO skills over the last couple of months. I think basic on page SEO is easy to understand. Unfortunately implementation is really quite tedious and boring. I feel people who do not apply SEO are completely ignorant of it and its importance or, just cannot be bothered to apply it.
        </p>
        <p style={{display: `none`}}>zambia</p>
        <h2 style={{marginTop: `2rem`, marginBottom: `1rem`}}>Technicals</h2>
        <h2 style={{display: `none`}}>Blogger</h2>
        <h6>The boring geeky stuff</h6>
        <p>The first week of August I have been struggling to work on website speed. I don't work on my <em><strong>blog</strong></em> speed for my <em><strong>blog</strong></em> site because it runs under a Gatsby framework which is renowned for speed</p>
        <p>The real issue is jquery if it is deferred, it makes the javascript in the page sleep. The drop down menu bars stop functioning, and jquery is quite heavy on code. If it is any consolation, Bootrap 5 is coming out, it will not be using JQuery in its library. And another big one is it will no longer support Explorer IE brower.</p>
        <p>When I look at come of the themes available too many are using JQuery. If JQuery is removed I seem to see the download shave another 1 - 1.5 seconds.</p>
        <p>
          It is important to note I have not added any structured data for the website SEO. I will do this at a later date. 
        </p>
        <p>Bought a new lenovo computer 500 GB static hard drive and 16GB RAM. Absolutely fantastic. With my 4GB HP it would take over 5 minutes to prepare the gatsby develop, with the Lenovo 20 seconds. When I used Gatsby with the HP, it was so slow that even VS code would lag, other programs stopped. The 16GB lenovo is an absolute powerhouse.</p>
        <p style={{display: `none`}}>zambia</p>
        <h2 style={{marginTop: `2rem`, marginBottom: `1rem`}}>Future plans</h2>
        <p>
          September - October 2020: I want to work on CSS and website design. Website design does not require much Javascript. Javascript used for simple animations are usually provided online as code snippets.
        </p>
        <p>
          November - December 2020: I want finish a javascript crash course and follow a couple of online javascript projects.
        </p>
        <p>
          January - May 2021: Study and practise React on the Gatsby Platform. In this period I will prettify this <em><strong>blog</strong></em> site. Apologies to my viewers. My current <em>React</em> skills are still dismal. I am not keen to start learning it until I have mastered Javascript.
        </p>
    </section>
    


      <div style={{textAlign: `center`}}>
      <Footer />
      </div>
    </div>
  )
  
  
}

export default IndexPage