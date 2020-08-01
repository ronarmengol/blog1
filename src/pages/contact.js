import React from 'react'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import layoutStyles from '../components/layout.module.scss'
import contactStyles from './contact.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import headerStyles from '../components/header.module.scss'

import { Form, Button } from 'react-bootstrap'

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
                <h1 className={headerStyles.title}>Kitwe Blog</h1>

                <Form name="sentMessage" novalidate="novalidate" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="sentMessage" />
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" name="name" placeholder="name" required/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" name="number" placeholder="mobile number" required/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" name="email" placeholder="email" required="true"/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name="message" rows="3" placeholder="your message" required="true"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
                
            </div>

        </div>
    </section>
    <Footer />
        </div>
    )
}

export default ContactPage