import React from 'react'

const TopBar = () => {
  return (
    <>
  
<div className="top-nav" id="home">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-auto">
        <p><i className="bx bxs-envelope" />info@wacares.com.au</p>
        <p><i className="bx bxs-phone-call" />+61 452 442 098</p>
      </div>
      <div className="col-auto social-icons d-none d-md-block  ">
        <a href="#" className=''><i className="bx bxl-facebook" /></a> 
        <a href="#"><i className="bx bxl-whatsapp" /></a>
        <a href="#"><i className="bx bxl-twitter" /></a>
        <a href="#"><i className="bx bxl-instagram" /></a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default TopBar
