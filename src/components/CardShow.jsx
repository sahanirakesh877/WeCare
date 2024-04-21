import React from "react";

const CardShow = () => {
  return (
    <>
      <div className="container mx-auto  ">
        <div className="row justify-content-between  d-flex align-items-center py-5 ">
          <div className="col-md-4 ">
            <div className="card shadow border  position-relative overflow-visible z-3   ">
              <div className="card-body ">
                <i className="fa-solid fa-hands-holding-child" />
                <h5 className="card-title">Age Care</h5>
                <p className="card-text">
                  Providing compassionate care for seniors, ensuring their
                  comfort and well-being.
                </p>
              </div>
            <div className="pentagon"></div>
            </div>
          </div>

          <div className="col-md-4 py-4 midcard">
            <div className="card shadow  border  position-relative overflow-visible z-3">
              <div className="card-body">
                <i className="fa-solid fa-notes-medical" />
                <h5 className="card-title">Health Care</h5>
                <p className="card-text">
                  Comprehensive healthcare services designed to promote wellness
                  and address medical needs
                </p>
              </div>
              <div className="pentagon"></div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="card shadow  border  position-relative overflow-visible z-3">
              <div className="card-body">
                <i className="fas fa-hands-helping" />
                <h5 className="card-title"> Support & Help </h5>
                <p className="card-text">
                  Offering a helping hand to those in need, providing assistance
                  and support in times of difficulty.
                </p>
              </div>
              <div className="pentagon"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShow;
