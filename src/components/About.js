// src/components/About.js
import React from "react";
import { image } from "../data/user";
import Links from "./Links";

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src={image} alt="I made this" />
      {links ? (
        <Links github={links.github} linkedin={links.linkedin} />
      ) : null}
    </div>
  );
}

export default About;
