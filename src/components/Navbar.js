import React, { useEffect, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Accounts from "../customComponents/Accounts";
import DarkThemeToggle from "../customComponents/darkThemeToggle";

import navlogo from "../img/logo.svg";

const Navbar = ({
  toggleChangeTheme,
  scrollToElement,
  openToggle,
  openSidebar,
  ...props
}) => {
  const [scroll, setScroll] = useState(0);
  const [colorChange, setColorchange] = useState(false);

  let { works, about, contact, dark } = { ...props };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCal = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = `${(scrollCal / height) * 100}%`;

      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
      setScroll(scrollValue);
    });
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: colorChange
          ? !props.dark
            ? "#fff"
            : "#2a2a2a"
          : "transparent",
      }}
    >
      <div className="navbar-nav">
        <div className="navbar__wrapper">
          <Link
            className="navbar__logo"
            to={"/portfolio"}
            onClick={() => scrollToElement(true)}
          >
            <img src={navlogo} alt="logo" />
          </Link>
          <div className="navbar__link-wrapper">
            <ul className="navbar__ul">
              <Link
                to={"/portfolio"}
                className="navbar__links"
                onClick={() => scrollToElement(true)}
                style={{
                  color: props.dark ? "#fff" : "#535461",
                }}
              >
                Home
              </Link>
              <Link
                to={"/portfolio"}
                className="navbar__links"
                onClick={() => scrollToElement(false, works)}
                style={{
                  color: props.dark ? "#fff" : "#535461",
                }}
              >
                Works
              </Link>
              <Link
                to={"/portfolio"}
                className="navbar__links"
                onClick={() => scrollToElement(false, about)}
                style={{
                  color: props.dark ? "#fff" : "#535461",
                }}
              >
                About
              </Link>
              {window.location.pathname === "/portfolio/works" ? (
                <Link
                  style={{
                    color: props.dark ? "#fff" : "#535461",
                  }}
                  className="navbar__links"
                  to={"/portfolio"}
                >
                  Contact
                </Link>
              ) : (
                <Link
                  style={{
                    color: props.dark ? "#fff" : "#535461",
                  }}
                  className="navbar__links"
                  to={"/portfolio#contact"}
                  onClick={() => scrollToElement(false, contact)}
                >
                  Contact
                </Link>
              )}
            </ul>
          </div>
          <Accounts dark={dark} nav={true} toggleChangeTheme={toggleChangeTheme}/>
          <div className="navbar__icon" onClick={() => openSidebar()}>
            <GiHamburgerMenu color="rgb(247, 185, 71)" size={25} />
          </div>
        </div>
      </div>
      <div
        className={!dark ? "slider-container" : "slider-container dark"}
        style={{ opacity: colorChange ? 1 : 0 }}
      >
        <div className="slider" style={{ width: scroll }}></div>
      </div>
    </nav>
  );
};

export default Navbar;
