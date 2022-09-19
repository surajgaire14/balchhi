import React from "react";
import menuItems from "../utils/menuItems.json";
import "./style.css";

function Menu() {
//   let items = [];
    for (let key in menuItems) {
      console.log(key);
      console.log(menuItems[key]);
    }
    // console.log(menuItems)

//   for (let key in menuItems) {
//     items.push([key, menuItems[key]]);
//   }
  // console.log(items[0][0])

  return (
    <div className="menu__container">
      <div className="menu">
        <h1>Our Menu</h1>
        {/* <h3>Momo</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Steam</p>
          <p>130</p>
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
