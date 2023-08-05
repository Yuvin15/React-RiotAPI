import React, { useState } from "react";
import "./Menu.css";

const DontClick1Container = () => (
  <div>
    <p>
      <img src="https://media.tenor.com/IFqC_LNcqMwAAAAC/hello-click-here.gif" />
    </p>
    <p>
      <a
        className="App-link"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Do what the image is telling you to do.
      </a>
    </p>
  </div>
);

const DontClick2Container = () => (
  <div>
    <img src="https://i.imgur.com/W8xKBly.png" />
    <p>
      Don't click the link below for your own safety.
    </p>
    <a
      className="App-link"
      href="https://www.youtube.com/watch?app=desktop&v=q7jCrhETMEM"
      target="_blank"
      rel="noopener noreferrer"
    >
      DO NOT CLICK
    </a>
  </div>
);

const Menu = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="menu">
      <ul className="menu-list">
        <li
          onClick={() => handleMenuItemClick("DontClick1")}
          className={selectedMenuItem === "DontClick1" ? "active" : ""}
        >
          Don't click this
        </li>
        <li
          onClick={() => handleMenuItemClick("DontClick2")}
          className={selectedMenuItem === "DontClick2" ? "active" : ""}
        >
          Don't click this also
        </li>
      </ul>
      {selectedMenuItem === "DontClick1" && <DontClick1Container />}
      {selectedMenuItem === "DontClick2" && <DontClick2Container />}
    </div>
  );
};

export default Menu;
