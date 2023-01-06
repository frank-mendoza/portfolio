import React from "react";
import Button from "../customComponents/Button";

import hero from "../img/contact.png";

const Contact = ({ location, onSubmit, change, onChange, dark }) => {
  return (
    <div
      data-aos='fade-up'
      className={!dark ? "contact " : "contact dark"}
      id="contact"
      ref={location}
    >
      <div className="contact__container">
        <div className="contact__wrapper">
          <div className="contact__hero">
            <img src={hero} alt="" />
          </div>
          <h2 className={!dark ? "title" : "title dark"}>Connect with me</h2>
        </div>
        <form
          action=""
          name="submit-to-google-sheet"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className={!dark ? "contact__form" : "contact__form dark"}
        >
          <div
            className={
              !dark ? "contact__form-items" : "contact__form-items bordered"
            }
          >
            <label htmlFor="name">Full Name</label>
            <input
              onChange={onChange}
              value={change.name}
              type="text"
              name="name"
              placeholder="Enter name here"
            />
          </div>
          <div
            className={
              !dark ? "contact__form-items" : "contact__form-items bordered"
            }
          >
            <label htmlFor="email">Email</label>
            <input
              onChange={onChange}
              value={change.email}
              type="email"
              name="email"
              placeholder="Enter email here"
            />
          </div>
          <div
            className={
              !dark ? "contact__form-items" : "contact__form-items bordered"
            }
          >
            <label htmlFor="content" className="start">
              Contents of Inqury
            </label>
            <textarea
              onChange={onChange}
              value={change.content}
              type="text"
              name="content"
              placeholder="Enter your contents here"
              rows={5}
            />
          </div>
          <div className="contact__button-wrapper">
            <Button dark={dark} width={true} name="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
