import React from 'react';
import aboutMeImage from '../assets/images/photo-output.JPG';

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
        <img src={aboutMeImage} alt="" width="200" height="200" />
      <p>
        <em>Coding, gaming, and creating have always been my passions. There's something magical about the creative process that drives me to spend countless hours tinkering with code, exploring new game mechanics, and crafting unique works of art.</em>
      </p>
    </section>
  );
}

export default AboutMe;
