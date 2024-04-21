import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

const About = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleaboutdetails = () => {
    navigate("/aboutdetails");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  
  return (
    <>
      <Helmet>
        <title>About | We Care</title>
        <meta
          name="description"
          content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />
      </Helmet>
      <section id="about" className="py-5 aboutbg">
        <div className="container">
          <div className="row justify-content-center d-flex align-items-center ">
            <div className="col-lg-6 pb-5">
              <div className="row">
                <h6 className="headtext">About Our Foundation</h6>
                <h1>We Are In A Mission To Help Helpless</h1>
                <p>
                  <strong>Western Australia Care Pvt. Ltd.</strong> is a{" "}
                  <strong>NDIS</strong> provider organization run by
                  professionals in order to serve the community where every
                  person is treated equally with respect and holds the power to
                  create opportunities for themselves and others.
                </p>
                <p className="text-justify">
                  Our core goals is to provide assistance to every person with a
                  disability to intregrate them within community, with friends
                  and family, and respect their views and values to meet their
                  goals.
                  <br />
                  Our values are essential foundation of our services: <br />
                  <ul className="fw-bold">
                    <li>Accountability</li>
                    <li>Respect</li>
                    <li>Reference</li>
                    <li>Proactiveness and Responsiveness</li>
                  </ul>
                </p>
                <div className="col-md-12">
                  <button
                    className="btn btn-warning text-white px-5 rounded-pill "
                    onClick={handleaboutdetails}
                  >
                    show More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="grid-container">
                <div className="grid-item item1">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-disabled-man-wheelchair-with-headphones_23-2150520452.jpg?t=st=1713318469~exp=1713322069~hmac=5ad1c10f8d3afe816dbd6bb91da0ab996aaf6f78afc649a91415e189c0308d68&w=826"
                    alt="true"
                  />
                </div>
                <div className="grid-item item2">
                  <img
                    src="https://img.freepik.com/premium-photo/portrait-paralyzed-young-man-red-vest-public-park-city-sitting-wheelchair-park-chair_242111-13219.jpg?w=826"
                    alt="true"
                  />
                </div>
                <div className="grid-item item3">
                  <img
                    src="https://img.freepik.com/premium-photo/young-woman-sitting-field_1048944-17563499.jpg?w=826"
                    alt="true"
                  />
                </div>
                <div className="grid-item item4">
                  <img
                    src="https://img.freepik.com/free-photo/woman-wheelchair-being-sad_23-2148476592.jpg?t=st=1713318524~exp=1713322124~hmac=405591d6e9c2e91abb06949d967d8ec6a1e6e0e2a2c1abc15c279320b865b9ed&w=826"
                    alt="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
