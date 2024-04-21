import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top text-center">
          <div className="container">
            <div className="row justify-content-center d-flex align-items-center">
              <div className="col-lg-6 text-center pb-4">
                <h4 className="navbar-brand">
                  We Care Disable People<span className="dot">.</span>
                </h4>
                <p className="text-justify  ">
                  Empowering disabled individuals with compassionate care and
                  support , <br /> our mission is rooted in the ethos of inclusivity and
                  advocacy
                </p>
                <div className="col-auto social-icons">
                  <a href="#">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#">
                    <i className="bx bxl-whatsapp" />
                  </a>
                  <a href="#">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="#">
                    <i className="bx bxl-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 ">
                <h4 className="navbar-brand text-center">
                  Contact<span className="dot">.</span>
                </h4>

                <p className="text-center">
                  Western Australia Care Pvt Ltd
                  <br />
                  15/17 Kenton Street, Lynwood, WA, 6147
                  <br />
                  ABN: 65674293559 <br />
                  ACN:674293559
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex justify-content-lg-around align-items-center flex-column flex-sm-row text-center">
          <p className="mb-0">Copyright@2024. All rights Reserved</p>
          <a href="https://technavata.com" className="mb-0 text-white">
            Designed By : <strong>NavataTech</strong>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
