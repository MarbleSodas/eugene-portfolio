import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';

function Hero() {
  return (
    <header className="hero__header" id="home">
      <h1>
        <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('Hi, I\'m' + "\n" + 'Eugene Park')
                      .pauseFor(1500)
                      .deleteChars(11)
                      .start();
                      typewriter.typeString('<span style="color: #0aa1ff;">Eugene Park</span>')
                  }}
        />
      </h1>
      {/* add animation to the h2 */}
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 8, duration: .5 }}}>
        <h2>Front-End Developer</h2>
      </motion.div>
    </header>
  );
}

export default Hero;