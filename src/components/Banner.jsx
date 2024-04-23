import React from "react";

const Banner = () => {
  return (
    <>
      <div className="hero-container">
        <div className="container  mx-auto ">
          <div className="row  d-flex align-items-center justify-content-center">
            <div className="col-lg-6  ">
              <div class="left-text">
                <h1 className="text-white">
                  Empower disabled individuals through compassionate support.
                </h1>
                <p className="text-white form-control-plaintext   ">
                  Empowering all abilities through support, advocacy, and
                  community. Together, we create inclusivity and make a positive
                  impact.
                </p>

                <button className="btn herobtn rounded-0 text-white fw-semibold ">
                  Know More
                </button>
              </div>
            </div>
            <div className="col-lg-6  d-flex align-items-center justify-content-center">
            <div className="bannerimg">
              <img src="/disablebgremove copy.png" alt="" className=" " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
