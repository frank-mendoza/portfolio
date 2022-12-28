import React from "react";

const Button = (props) => {
  const { name, dark, onClick, black, width } = props;
  return (
    <button
      className={!dark ? (black ? "button black" : "button") : "button dark"}
      style={{ width: width ? "150px" : "" }}
      onClick={() => (onClick ? onClick() : null)}
    >
      {name}
    </button>
  );
};

export default Button;
