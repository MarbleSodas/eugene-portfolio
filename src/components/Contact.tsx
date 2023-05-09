import React from 'react'
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <div id='contact'>
        <h1 className='contact'>CONTACT</h1>

        <form className={styles.contactForm} method='post' name='contact' data-netlify='true'>
            
            <p>
                <input className={styles.input} type='text' name='name' placeholder="Name"/>
            </p>
            <p>
                <input className={styles.input} type='email' name='email' placeholder="Email"/>
            </p>
            <p>
                <textarea className={styles.textarea} name='message' placeholder="Message"/>
            </p>
            <p>
                <button className={styles.button} type='submit'>Submit</button>
            </p>
        </form>
    </div>
  )
}

export default Contact