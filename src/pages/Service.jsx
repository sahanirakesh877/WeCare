import React from "react";
import servicedata from "../Data/ServiceData";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <>
      <section id="services" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro">
                <h6 className="headtext">Our Service</h6>
                <h1>What We Do?</h1>
                <p className="mx-auto">
                Highlighting the invaluable nature of disability services, our offerings are meticulously crafted to cater to diverse needs, ensuring inclusivity and empowerment for all individuals with disabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
          {servicedata.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
              <Link to={`/service/${item.id}`}>
                <div className="service">
                  <i className={`fa-solid ${item.imgIcons} serviceicon`} />
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
