import React from 'react'
import styles from '../styles/Contact.module.css';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div id='contactform'>
        <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .75}}}
        >
            <h1 className='contact'>CONTACT</h1>
        </motion.div>
        
        <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .75}}}
        >
            <form className={styles.contactForm} method='post' name='contact' data-netlify='true'>
                <a href="https://www.iubenda.com/privacy-policy/72167887" target='__blank' className="policy">Privacy Policy</a>
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <input className={styles.input} type='text' name='name' placeholder="Name" required/>
                </p>
                <p>
                    <input className={styles.input} type='email' name='email' placeholder="Email" required/>
                </p>
                <p>
                    <textarea className={styles.textarea} name='message' placeholder="Message" required/>
                </p>
                <p>
                    <Button bordered color="primary" rounded ghost type='submit'>
                        Submit
                    </Button>
                    {/* <button className={styles.button} type='submit'>Submit</button> */}
                </p>
            </form>
        </motion.div>
        
    </div>
  )
}

export default Contact