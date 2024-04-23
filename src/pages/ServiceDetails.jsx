import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import servicedata from "../Data/ServiceData";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const pathname=useLocation()
  const { id } = useParams();
  const serviceData = servicedata.find((item) => item.id == id);
 
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])

  return (
    <>
    <Helmet>
        <title>ServiceDetails | WA Care</title>
        <meta name="description" content="Learn more about our company and services at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals." />
        <meta name="keywords" content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality" />  
            </Helmet>
   
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={serviceData.images[0]}
            className="img-fluid rounded shadow-lg"
            alt="Service"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="text-brand">{serviceData.title}</h2>
          <p className="lead text-muted">{serviceData.description}</p>
          <div className="mt-4">
            <h3 className="text-secBrand">About</h3>
            <p>{serviceData.about}</p>
          </div>
          <div className="mt-4">
            <h4 className="text-body">Highlights</h4>
            <ul className="list-unstyled">
              {serviceData.highlights.map((highlight, index) => (
                <li key={index}>
                  <i className="fas fa-check text-success me-2"></i>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        {serviceData.images.slice(1).map((image, index) => (
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4" key={index}>
            <img
              src={image}
              className="img-thumbnail rounded shadow"
              alt={`Service ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ServiceDetails;
