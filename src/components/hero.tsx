"use client";
import type { FC } from "react";
import Nav from "./nav";

const Hero: FC = () => (
  <>
    <section className="px-7 sm:px-10" id="hero">
      <Nav />
      <p className="mt-10 text-muted-foreground">
        I&apos;m a software engineer based in Toronto. Studied physics and
        statistics at UofT.
        <br />
        I&apos;m passionate about design engineering and AI to deliver
        exceptional user experiences.
        <br />
      </p>
    </section>
  </>
);

export default Hero;
