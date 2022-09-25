import React from "react";
import menuItems from "../utils/menuItems.json";
import "./style.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Menu() {
  let keys = [];

  // console.log(JSON.parse(menuItems));

  for (let [key,value] of Object.entries(menuItems)) {
    console.log(key);
    console.log(value);
  }

  return (
    // <div className="menu__container">
    //   <div className="menu">
    //     <h1>Our Menu</h1>
    //     {/* <h3>Momo</h3>
    //     <div style={{ display: "flex", justifyContent: "space-between" }}>
    //       <p>Steam</p>
    //       <p>130</p>
    //     </div> */}
    //     {menuItems.map((menu, i) => {
    //       // console.log(menu);
    //       return (
    //         <div key={i}>
    //           <h3>{menu.category}</h3>
    //           <div style={{ display: "flex", justifyContent: "space-between" }}>
    //             <p>{}</p>
    //             <p>{}</p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <Box sx={{ width: "100%" }}>
      <Box sx={{ width: "80%", margin: "3em auto" }}>
        <Typography component={"h1"} variant = "p">Our Menu</Typography>
      </Box>
    </Box>
  );
}

export default Menu;
