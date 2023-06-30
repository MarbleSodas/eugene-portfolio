import React from "react";
import Typewriter from "typewriter-effect";

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
      <h2>Front-End Developer</h2>
    </header>
  );
}

export default Hero;