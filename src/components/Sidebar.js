import React from "react";
import { Link } from "react-router-dom";

import { MdClose } from "react-icons/md";
import {
  GrProjects,
  GrMailOption,
  GrHomeRounded,
  GrCatalog,
} from "react-icons/gr";

import navlogo from "../img/logo.svg";
import DarkThemeToggle from "../customComponents/darkThemeToggle";
import Accounts from "../customComponents/Accounts";

const Sidebar = ({
  toggleChangeTheme,
  scrollToElement,
  openToggle,
  openSidebar,
  ...props
}) => {
  return (
    <div
      className="sidebar"
      style={
        props.toggle
          ? { right: "-100%", width: 0 }
          : { right: 0, width: "100%" }
      }
      onClick={() => openSidebar()}
    >
      <div
        className={props.dark ? "sidebar__wrapper dark" : "sidebar__wrapper"}
      >
        <div className="sidebar__bottom">
          <div className="custom__switch-wrap">
            <DarkThemeToggle
              toggleChangeTheme={toggleChangeTheme}
              dark={props.dark}
            />
          </div>
        </div>
        <div className="sidebar__links">
          <ul className="sidebar__ul">
            <Link
              className="sidebar__logo"
              to={"/portfolio"}
              onClick={() => openSidebar()}
            >
              <img src={navlogo} alt="logo" />
            </Link>
            <Link
              to={"/portfolio"}
              className="sidebar__links"
              onClick={() => scrollToElement(true)}
            >
              <GrHomeRounded size={20} className={props.dark ? "path" : ""} />
            </Link>
            <Link
              to={"/portfolio"}
              className="sidebar__links"
              onClick={() => scrollToElement(false, props.works)}
            >
              <GrProjects size={20} className={props.dark ? "path" : ""} />
            </Link>
            <Link
              to={"/portfolio"}
              className="sidebar__links"
              onClick={() => scrollToElement(false, props.about)}
            >
              <GrCatalog size={20} className={props.dark ? "path" : ""} />
            </Link>
            <Link
              to={"/portfolio"}
              className="sidebar__links"
              onClick={() => scrollToElement(false, props.contact)}
            >
              <GrMailOption size={20} className={props.dark ? "path" : ""} />
            </Link>
          </ul>
        </div>
        <Accounts
          dark={props.dark}
          sidenav={true}
          toggleChangeTheme={toggleChangeTheme}
        />
      </div>
    </div>
  );
};

export default Sidebar;
