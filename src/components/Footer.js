import React from "react";
import { BsMessenger, BsLinkedin, BsSkype, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import footerlogo from "../img/logo.svg";

const Footer = ({ dark }) => {
  return (
    <footer className="footer ">
      <div className={!dark ? "footer__container" : "footer__container dark"}>
        <div className="footer__logo">
          <img src={footerlogo} alt="logo" />
          <p>
            Follow and visit my <br />
            social media accounts.
          </p>
        </div>
        <div className="footer__links">
          <a
            href="https://wa.me/639506648307"
            target="_blank"
          >
            <BsWhatsapp
              size={25}
              color={!dark ? "#606060" : "#fff"}
              className="icons"
            />
          </a>
          <a
            href="https://linkedin.com/in/frank-mendoza-382213207"
            target="_blank"
          >
            <BsLinkedin
              size={25}
              color={!dark ? "#606060" : "#fff"}
              className="icons"
            />
          </a>
          <a href="https://m.me/fank.mendoza.965580" target="_blank">
            <BsMessenger
              size={25}
              color={!dark ? "#606060" : "#fff"}
              className="icons"
            />
          </a>
          <a href="https://join.skype.com/invite/xX4Vy6VXFaP0" target="_blank">
            <BsSkype
              size={25}
              color={!dark ? "#606060" : "#fff"}
              className="icons"
            />
          </a>
          <div
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault()
              window.location.href = "mailto:example@email.com";
            }}
          >
            <SiGmail
              size={25}
              color={!dark ? "#606060" : "#fff"}
              className="icons"
            />
          </div>
        </div>

        <span className="footer__copyright">
          Copyright ©2022 All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
