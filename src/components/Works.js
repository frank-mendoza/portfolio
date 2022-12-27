import React from "react";
import { Link } from "react-router-dom";

import Button from "../customComponents/Button";

const Works = ({ onActiveTav, ...props }) => {
  const { newRecord } = props;
  const all = props.tab.all;
  const personal = props.tab.personal;
  const member = props.tab.member;

  let slicedata = newRecord.slice(0, 6);
  let record = [];

  window.location.pathname === "/portfolio/works"
    ? (record = newRecord)
    : (record = slicedata);

  let personalData = record.filter((e) => e.type === 0);
  let memberData = record.filter((e) => e.type === 1);

  const WorkItem = () => {
    if (newRecord.length === 0) {
      return (
        <p style={{ textAlign: "center", color: "white", margin: "1em auto" }}>
          No records found
        </p>
      );
    } else {
      if (all) {
        return record.map((item, key) => {
          return <CustomItem key={key} item={item} />;
        });
      } else if (personal) {
        return personalData.map((item, key) => {
          return <CustomItem key={key} item={item} />;
        });
      } else {
        return memberData.map((item, key) => {
          return <CustomItem key={key} item={item} />;
        });
      }
    }
  };

  const CustomItem = ({ item }) => (
    <a
      key={item.id}
      href={item.link}
      target="_blank"
      className={!props.dark ? "works__item" : "works__item dark"}
      style={{ opacity: !props.loading ? 0 : 1, transition: "ease-in 1s" }}
    >
      <img src={item.image} alt={item.title} />
      <div
        className={
          !props.dark ? "works__description" : "works__description dark"
        }
      >
        <p className="works__description-title">{item.title}</p>
        <p className="works__description-client">{item.details}</p>
      </div>
    </a>
  );

  const showButton = () => {
    return props.worksroute ||
      newRecord.length === 0 ||
      newRecord.length <= 6 ? null : (
      <Link
        className="works__button"
        to="/portfolio/works"
        onClick={() => props.resetWorks()}
      >
        <Button dark={props.dark} name="See all" />
      </Link>
    );
  };

  return (
    <div className={!props.dark ? "wrapper" : "wrapper dark"}>
      <div
        className="works"
        id="works"
        ref={props.location}
        style={{
          paddingTop:
            window.location.pathname === "/portfolio/works" ? "120px" : "",
        }}
      >
        <h2 className={!props.dark ? "title" : "title dark"}>Works</h2>
        <div
          className={
            !props.dark ? "works__tablinks" : "works__tablinks bordered"
          }
        >
          <ul className="works__filter list">
            <li
              className={!all ? " w-link" : "active w-link"}
              onClick={() => onActiveTav("all")}
            >
              All Categories
            </li>
            <li
              className={!personal ? " w-link" : "active w-link"}
              onClick={() => onActiveTav("personal")}
            >
              Personal
            </li>
            <li
              className={!member ? " w-link" : "active w-link"}
              onClick={() => onActiveTav("member")}
            >
              Member on a team
            </li>
          </ul>
        </div>
        <div
          className={
            newRecord.length < 2
              ? "works__container single"
              : "works__container"
          }
        >
          {!props.loading ? (
            <div style={{ textAlign: "center", fontWeight: "700" }}>
              ...loading
            </div>
          ) : (
            WorkItem()
          )}
        </div>
        {showButton()}
      </div>
    </div>
  );
};

export default Works;
