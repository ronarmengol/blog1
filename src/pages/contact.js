import React from 'react'
import { Helmet } from 'react-helmet'
import layoutStyles from '../components/layout.module.scss'
import contactStyles from './contact.module.css'
import Footer from '../components/footer'
import Header from '../components/header'

import { Form, Button, Row, Col } from 'react-bootstrap'

const ContactPage = () => {
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

        <section className={contactStyles.background1}>
            <div className={layoutStyles.container}>
                <Header />
                <div className={layoutStyles.content}>

                <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
            </div>

        </div>
    </section>
    <Footer />
        </div>
    )
}

export default ContactPage