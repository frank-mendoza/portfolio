import React from "react";

import hero from "../img/hero.png";
import pdf from "../pdf/Frank-Mendoza-CV.pdf"

const Home = ({ location, dark }) => {
  const onButtonClick = () => {};

  return (
    <div data-aos='fade-in' className={!dark ? "home" : "home dark"} id="home" ref={location}>
      <div className="home__container">
        <div className="home__hero">
          <img src={hero} alt="" />
        </div>
        <div className={!dark ? "home__contents" : "home__contents dark"}>
          <h1 className="home__title ">
            Hi! I'm<br />
             Frank
          </h1>
          <h3 className="home__subtitle">Frontend Developer</h3>

          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className={!dark ? "button black" : "button dark"}
            style={{ width: "150px" }}
            onClick={() => onButtonClick()}
            download
          >
            Donwload CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
