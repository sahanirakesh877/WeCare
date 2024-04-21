import React from "react";
import { Helmet } from "react-helmet";

const Team = () => {
  return (
    <>
    <Helmet>
        <title>Team | We Care</title>
        <meta name="description" content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals." />
        <meta name="keywords" content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality" />      </Helmet>
      <section id="team">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro">
                <h6>Team</h6>
                <h1>Partnership and Teams</h1>
                <p className="mx-auto">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8">
              <div className="team-member">
                <div className="image">
                  <img src="/team_1.jpg" alt />
                  <div className="social-icons">
                    <a href="#">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-pinterest" />
                    </a>
                  </div>
                  <div className="overlay" />
                </div>
                <h5>Nishan shrestha</h5>
<p className='px-4'>               <strong> Working : </strong><span>ChildCare sector in different position i.e. Chef</span>
</p>              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="team-member">
                <div className="image">
                  <img src="/team_2.jpg" alt />
                  <div className="social-icons">
                    <a href="#">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-pinterest" />
                    </a>
                  </div>
                  <div className="overlay" />
                </div>
                <h5>Samaj Bhandari</h5>
<p className='px-4'>              <strong> Working :</strong><span>admin staff in education service industry</span>
</p>              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="team-member">
                <div className="image">
                  <img src="/team_3.jpg" alt />
                  <div className="social-icons">
                    <a href="#">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#">
                      <i className="bx bxl-pinterest" />
                    </a>
                  </div>
                  <div className="overlay" />
                </div>
                <h5>Resha Dulaal</h5>
                <p>Helping Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
