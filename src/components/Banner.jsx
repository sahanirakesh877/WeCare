import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="owl-carousel owl-theme hero-slider">
  <div className="slide slide1">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center text-white">
          <h6 className="text-white text-uppercase">
          </h6>
          <h1 className="display-3 my-4">Helping People with <br />Disabilities</h1>
          <a href="#" className="btn btn-brand">Get Started</a>
          <a href="#" className="btn btn-outline-light ms-3">Our work</a>
        </div>
      </div>
    </div>
  </div>
  <div className="slide slide2">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-10 offset-lg-1 text-white">
          <h6 className="text-white text-uppercase">
            get ready to help
          </h6>
          <h1 className="display-3 my-4">
            Empowering People with <br />Disabilities
          </h1>
          <a href="#" className="btn btn-brand">Get Started</a>
          <a href="#" className="btn btn-outline-light ms-3">Our work</a>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </>
  )
}

export default Banner
