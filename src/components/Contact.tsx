import React from 'react'
import styles from '../styles/Contact.module.css';
import { Button } from '@nextui-org/react';

function Contact() {
  return (
    <div id='contactform'>
        <h1 className='contact'>CONTACT</h1>

        <form className={styles.contactForm} method='post' name='contact' data-netlify='true'>
        <a href="https://www.iubenda.com/privacy-policy/72167887" target='__blank' className="paragraph">Privacy Policy</a>
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
    </div>
  )
}

export default Contact