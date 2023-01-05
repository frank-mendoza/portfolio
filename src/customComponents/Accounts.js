import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { SiSkypeforbusiness } from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const Accounts = ({ dark, nav, sidenav }) => {
  const size = () => {
    return nav || sidenav ? 20 : 25;
  };

  const color = () => {
    if (!dark) {
      if (nav || sidenav) {
        return "rgb(0, 0, 0)";
      } else return "#606060";
    } else {
      return "#fff";
    }
  };
  return (
    <div
      className={
        nav
          ? "account__links nav"
          : sidenav
          ? "account__links sidenav "
          : "account__links "
      }
    >
      <a href="https://wa.me/639506648307" target="_blank">
        <BsWhatsapp size={size()} color={color()} className="icons" />
      </a>
      <a href="https://linkedin.com/in/frank-mendoza-382213207" target="_blank">
        <AiOutlineLinkedin
          size={nav || sidenav ? 23 : 28}
          color={color()}
          className="icons"
        />
      </a>
      <a href="https://m.me/fank.mendoza.965580" target="_blank">
        <RiMessengerLine size={size()} color={color()} className="icons" />
      </a>
      <a href="https://join.skype.com/invite/xX4Vy6VXFaP0" target="_blank">
        <SiSkypeforbusiness size={size()} color={color()} className="icons" />
      </a>
      <div
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "mailto:example@email.com";
        }}
      >
        <HiOutlineMail size={size()} color={color()} className="icons" />
      </div>
    </div>
  );
};

export default Accounts;
