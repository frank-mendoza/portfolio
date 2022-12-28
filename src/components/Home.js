import React from "react";

import hero from "../img/hero.png";
import Button from "../customComponents/Button";

const Home = ({ location, dark }) => {
  return (
    <div className={!dark ? "home" : 'home dark'} id="home" ref={location}>
      <div className="home__container">
        <div className="home__hero">
          <img src={hero} alt=""/>
        </div>
        <div className={!dark ? "home__contents" : 'home__contents dark'}>
          <h1 className="home__title ">
            Hi! <br />
            I'm Frank
          </h1>
          <h3 className="home__subtitle">Frontend Developer</h3>
          {/* <Button dark={dark} black={true} name="Donwload CV"/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
