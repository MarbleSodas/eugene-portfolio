import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <header className="hero__header" id="home">
      <h1>
        <Typewriter
                  options={{
                      wrapperClassName: "typedText",
                      strings: 'Eugene Park',
                      autoStart: true,
                  }}
        />
      </h1>
      {/* add animation to the h2 */}
      <h2>Full Stack Developer</h2>
    </header>
  );
}

export default Hero;