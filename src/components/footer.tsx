import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-center">
      <div className="absolute inset-x-0 top-0 z-10 h-40 bg-linear-to-b from-black to-transparent"></div>
      <video
        src="/footer-1.webm"
        loop
        autoPlay
        muted
        playsInline
        className=""
      ></video>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-black"></div>
    </footer>
  );
};

export default Footer;
