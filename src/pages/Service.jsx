import React, { useEffect } from "react";
import servicedata from "../Data/ServiceData";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Service = () => {
  const pathname=useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])
  return (
    <>
     <Helmet>
        <title>Service | We Care</title>
        <meta name="description" content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals." />
        <meta name="keywords" content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality" />  
             </Helmet>
      <section id="services" className="text-center py-5">
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
