import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  const images = [
    "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/box-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
  ];
  return (
    <footer className={classes.footer}>
      <div className={classes.top}>
        <h3>
          Top companies choose <a href="https://udemy.com"> Udemy Business</a>{" "}
          to build in-demand career skills.
        </h3>
        <div>
          {images.map((imageSrc, i) => (
            <img key={i} src={imageSrc} alt="" />
          ))}
        </div>
      </div>
      <div className={classes.middle}>
        <ul>
          <li>
            <a>Udemy Business</a>
          </li>
          <li>
            <a>Teach on Udemy </a>
          </li>
          <li>
            <a>Get the app</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Help and Support</a>
          </li>
          <li>
            <a href="">Affiliate</a>
          </li>
          <li>
            <a href="">Investors</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="">Terms</a>
          </li>
          <li>
            <a href="">Privacy and policy</a>
          </li>
          <li>
            <a href="">Cookie settings</a>
          </li>
          <li>
            <a href="">Sitemap</a>
          </li>
          <li>
            <a href="">Accessibility statement</a>
          </li>
        </ul>

        <div>
          <button>
            <i className="fa-sharp fa-solid fa-globe" />
            English
          </button>
        </div>
      </div>
      <div className={classes.bottom}>
        <a href={"https://udemy.com"}>
          <img
            alt=""
            src={
              "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            }
          />
        </a>
        <div>
          <p>&copy; 2022 Udemy Inc..</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
