import React from "react";
import Accounts from "../customComponents/Accounts";

import footerlogo from "../img/logo.svg";

const Footer = ({ dark }) => {
  return (
    <footer data-aos='fade-in' className="footer ">
      <div className={!dark ? "footer__container" : "footer__container dark"}>
        <div className="footer__logo">
          <img src={footerlogo} alt="logo" />
          <p>
            Follow and visit my <br />
            social media accounts.
          </p>
        </div>
        <Accounts dark={dark}/>

        <span className="footer__copyright">
          Copyright ©2022 All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
