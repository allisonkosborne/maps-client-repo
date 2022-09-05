import { useEffect, useState } from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Creepster&display=swap"
        rel="stylesheet"
      ></link>
      <div>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Creepster&display=swap';
        </style>
        <div className="home-page">
          {/* <img src={"/image1.jpg"} alt="Flowers" /> */}
          <h1 className="welcome">M.A.P.S.</h1>
          <h2 class="intro-saying">Monster Amplitude & Paranormal Spectrums</h2>
          <div class="wrapper">
            <h2 className="welcoming-saying">Who have you seen </h2>
            <div class="words">
              <span>creeping</span>
              <span>flying</span>
              <span>crawling</span>
              <span>slithering </span>
              <span>creeping</span>
            </div>
            <h2 className="welcoming-saying">around your neighborhood?</h2>
          </div>
          <div class="button-div">
            <button class="front-button" id="let-us-know">
              Let Us Know!
            </button>
          </div>
          <div class="photo line">
            <img src={window.location.origin + "public/favicon.ico"} />
            {/* <img src="public/favicon.ico" alt="icon" /> */}
          </div>
        </div>
        <p>{/* <PropsAndState yourName={users.name} /> */}</p>
        <div class="protect">
          <h5>***** Help us protect our local monsters! ****</h5>
        </div>
      </div>
    </>
  );
};
