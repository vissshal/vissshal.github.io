import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>OUR STORE</p>
          </div>
          <div className="list">
            <ul>
              <li>Siang Hostel</li>
              <li>Lohit Hostel</li>
              <li>Manas Hostel</li>
              <li>Kameng Hostel</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer" style={{ textAlign: "center" }}>
        Free Classifieds in India. © 2006-2022 OLX
      </div>
    </div>
  );
}

export default Footer;
