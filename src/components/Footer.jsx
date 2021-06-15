import React from "react";
import "boxicons";
import dlogo from "./../assets/images/dl-logo.png";
import clogo from "./../assets/images/cg.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__left">
          <div className="footer__title">
            <div className="footer__title__top">
              <div className="footer__title__top__logo">
                <div>
                  <img src={clogo} alt="" />
                </div>
                <h2>
                  crypto<span>genie</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div>
              <box-icon name="copyright" color="#6c6c7c" size="18px"></box-icon>
            </div>
            <p>2021 cryptogenie. All rights reserved</p>
          </div>
        </div>
        <div className="footer__wrapper__right">
          <div className="footer__title">
            <p>Developed by:</p>
            <div className="footer__title__top">
              <div className="footer__title__top__logo">
                <div>
                  <img src={dlogo} alt="" />
                </div>
                <h2>devlusion</h2>
              </div>
              <a href="mailto: devlusion@gmail.com">
                <button>Contact us</button>
              </a>
            </div>
          </div>
          <div className="footer__logo">
            <div>
              <a
                href="https://github.com/dev-lusion"
                target="_blank"
                rel="noreferrer"
              >
                <box-icon type="logo" name="github" color="#efecec"></box-icon>
              </a>
            </div>
            <div>
              <a
                href="http://www.devlusion.com/"
                target="_blank"
                rel="noreferrer"
              >
                <box-icon name="globe" color="#efecec"></box-icon>
              </a>
            </div>
            <div>
              <a href="#">
                <box-icon type="logo" name="twitter" color="#efecec"></box-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
