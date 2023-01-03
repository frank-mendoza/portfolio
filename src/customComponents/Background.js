import React from "react";

const Background = ({ dark }) => {
  const listItem = () => {
    let item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return item.map(() => <li></li>);
  };
  return (
    <div className="area">
      <ul className={!dark ? "circles" : "circles dark"}>{listItem()}</ul>
    </div>
  );
};

export default Background;
