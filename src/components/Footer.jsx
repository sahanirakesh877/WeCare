import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
  <div className="footer-top text-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h4 className="navbar-brand">We Care Disable<span className="dot">.</span></h4>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from
          </p>
          <div className="col-auto social-icons">
            <a href="#"><i className="bx bxl-facebook" /></a>
            <a href="#"><i className="bx bxl-whatsapp" /></a>
            <a href="#"><i className="bx bxl-twitter" /></a>
            <a href="#"><i className="bx bxl-instagram" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom text-center d-flex  justify-content-lg-around ">
    <p className="mb-0">Copyright@2024. All rights Reserved</p>
    <a href="https://technavata.com"><p className="mb-0">Designed By : <strong>NavataTech</strong></p></a>
  </div>
</footer>

    </>
  )
}

export default Footer
