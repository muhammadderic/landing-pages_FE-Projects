import React from 'react';
import horse from '../assets/horse.png';
import '../styles/footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Ready to Embrace Tomorrow Ahead of the Pack? Dive into the Future with Susu Kuda Liar.</h1>
    </div>

    <div className="footer-btn">
      <p>Request A Horse</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={horse} alt="logo" />
        <p>Mucodevde <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Milk</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Drink it</h4>
        <p>Indonesia</p>
        <p>000888000888</p>
        <p>info@susukudaliar.milk</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2024 SKL. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
