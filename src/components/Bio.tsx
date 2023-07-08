import React from 'react'
import { motion } from 'framer-motion';
import { Button, Container, Row } from '@nextui-org/react';

function Bio() {

  return (
    <div id="about" className='page'>
      <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .5 }}}
            >
              <h1 className="title">About</h1>
      </motion.div>
      <motion.div className="bio"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: .5 }}}
            >
              <p className="paragraph">{"I am currently a Computer Science student at Chaffey College and I also study software development in my free time. My passion in development has led me to expand my skill set and problem-solve in more creative ways!As a growing developer, I\'m constantly learning new programming languages and exploring various web development frameworks. I thrive on challenges and am always seeking opportunities to push the boundaries of what I can do. My creative mind and strong work ethic set me apart, and I\'m excited to make a meaningful impact in the tech industry in the future!"}</p>
              <Container>
                <Row justify="center" align="center" className='button'>
                <a href="./FrontEndDeveloper.pdf" target="_blank">
                <Button bordered color="primary" rounded ghost>
                  Resume
                </Button>
                </a>
                </Row>
              </Container>
      </motion.div>
    </div>
  )
}

export default Bio