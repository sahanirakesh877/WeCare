import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Team = () => {
  const pathname = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Team | We Care</title>
        <meta
          name="description"
          content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />{" "}
      </Helmet>
      <section id="team" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro">
                <h6>Team</h6>
                <h1>Partnership and Teams</h1>
                <p className="mx-auto">
                  Our team at WA Care is dedicated to NDIS support, coordinating
                  services and facilitating community access for individuals
                  with disabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8">
              <div className="profile-card text-center d-flex justify-content-center flex-column  align-items-center">
                <div className="profile-icon">
                  <img src="/teammale1.webp" alt="" />
                </div>
                <div className="profile-name">
                  <h5>Nishan Shrestha</h5>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-8">
              <div className="profile-card text-center d-flex justify-content-center flex-column  align-items-center ">
                <div className="profile-icon">
                  <img src="/teammale1.webp" alt="" />
                </div>
                <div className="profile-name">
                  <h5> Srijana Sharma</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="profile-card text-center d-flex justify-content-center flex-column  align-items-center">
                <div className="profile-icon">
                  <img src="/femaleteam.png" alt="" />
                </div>
                <div className="profile-name">
                  <h5>Kalpana Shrestha</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
