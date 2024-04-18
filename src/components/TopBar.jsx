import React from 'react'

const TopBar = () => {
  return (
    <>
  
<div className="top-nav" id="home">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-auto">
        <p><i className="bx bxs-envelope" />disability@gmail.com</p>
        <p><i className="bx bxs-phone-call" /> 9704501215</p>
      </div>
      <div className="col-auto social-icons d-none d-md-block">
        <a href="#"><i className="bx bxl-facebook" /></a>
        <a href="#"><i className="bx bxl-twitter" /></a>
        <a href="#"><i className="bx bxl-instagram" /></a>
        <a href="#"><i className="bx bxl-pinterest" /></a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default TopBar
