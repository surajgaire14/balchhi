import { Typography } from "@mui/material";
import React from "react";
import "./style.css";

const links = [
  { name: "Home", link: ["Booking", "Facilities", "Location", "Service"] },
  { name: "About us", link: ["FAQ", "Company", "Statistic"] },
  { name: "Help", link: ["How it Work", "Desk Help"] },
];

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="content__container">
          <div className="about">
            <Typography variant="h3" component={"h3"}>
              Balchhi Resort
            </Typography>
            <Typography>
              This is a resort where you get a lots of extra choice &
              comfortable memorable tour.
            </Typography>
            <div className="icons">
              <a href="https://www.facebook.com/Balchhireosrt/">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/balchhiresort/">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://web.whatsapp.com/">
                <i className="ri-whatsapp-line"></i>
              </a>
            </div>
          </div>
          <div className="content">
            {links.map(({ name, link }, i) => {
              return (
                <div key={i}>
                  <Typography variant="h5" component={"h5"}>
                    {name}
                  </Typography>
                  <div>
                    <div className="links">
                      {link.map((link, i) => {
                        return <Typography key={i}>{link}</Typography>;
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="copyright">
          <Typography style={{ textAlign: "center", margin: "10px 0" }}>
            Copyright © 2022 Balchhi. All Right Reserved.
          </Typography>
          <Typography style={{textAlign:"center"}}>Made with ♥ byThe Boring School</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
