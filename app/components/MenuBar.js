import React from "react";
import { menuItems } from "../Information/data";

const MenuBar = () => {
  return (
    <div>
      {menuItems.map((val, idx) => (
        <div key={idx}>{val}</div>
      ))}
    </div>
  );
};

export default MenuBar;
