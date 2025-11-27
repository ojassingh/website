"use client";
import React from "react";
import { FC } from "react";
import Nav from "./nav";

const Hero: FC = () => {

  return (
    <>
      <section
        id="hero"
        className="sm:px-10 px-7"
      >
        <Nav />
        <p className="text-muted-foreground mt-10">
          I&apos;m a software engineer based in Toronto. 
          Studied physics and statistics at UofT. 
          <br/>
          I&apos;m passionate about design engineering and AI to deliver exceptional user experiences.
          <br />
        </p>
      </section>
      
    </>
  );
};

export default Hero;

