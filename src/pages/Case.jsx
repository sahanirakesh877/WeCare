import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Case = () => {
  const pathname=useLocation()
  const items = [
    <div className="project ">
      <div className="overlay" />
      <img
        src="https://images.pexels.com/photos/3036577/pexels-photo-3036577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="project-image"
        alt
      />
      <div className="content">
        <h4 className="">Ensure Education For Every Poor Children</h4>
      </div>
    </div>,
    <div className="project">
      <div className="overlay" />
      <img
        src="https://img.freepik.com/free-photo/social-integration-working-team_23-2149341088.jpg?t=st=1710656712~exp=1710660312~hmac=1c8e1fde707c5d2c0fdf71c064328788afe19a3ca53601379134bbe24ece954d&w=826"
        className="project-image"
        alt
      />
      <div className="content">
        <h4>Providing Healthy Food For The Children</h4>
        {/* <h6>Website Design</h6> */}
      </div>
    </div>,

    <div className="project">
      <div className="overlay" />
      <img
        src="https://img.freepik.com/premium-photo/female-freelancer-disabled-wheelchair-works-remotely-from-home_271580-590.jpg?w=826"
        className="project-image"
        alt
      />
      <div className="content">
        <h4>Supply Drinking Water For The People</h4>
        {/* <h6>Website Design</h6> */}
      </div>
    </div>,

    <div className="project">
      <div className="overlay" />
      <img
        src="https://img.freepik.com/premium-photo/mature-businesswoman-who-uses-wheelchair-working-remotely-laptop-outdoor-cafe_271580-2283.jpg?w=826"
        className="project-image"
        alt
      />
      <div className="content">
        <h4>Ensure Education For Every Poor Children</h4>
        {/* <h6>Website Design</h6> */}
      </div>
    </div>,

    <div className="project">
      <div className="overlay" />
      <img
        src="https://img.freepik.com/free-photo/disabled-man-helping-girl-learn_23-2149140312.jpg?t=st=1710656799~exp=1710660399~hmac=dd8336138d68fd43a66b4b23f3f28795bcd657cd57722907513d5174ea6e4f06&w=826"
        className="project-image"
        alt
      />
      <div className="content">
        <h4>Providing Healthy Food For The Children</h4>
        {/* <h6>Website Design</h6> */}
      </div>
    </div>,

    <div className="project">
      <div className="overlay" />
      <img
        src="https://img.freepik.com/free-photo/group-men-working-together-office_23-2148483868.jpg?t=st=1710656860~exp=1710660460~hmac=9edb356bf0f1b919eb3b783119d684f84abcf0970909c1d7d39e95b5c0d733f0&w=826"
        className="project-image"
        alt
      />
      <div className="content">
        <h4>Supply Drinking Water For The People</h4>
        {/* <h6>Website Design</h6> */}
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
  };
  
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])
  return (
    <>
     <Helmet>
        <title>Disable Case | We Care</title>
        <meta name="description" content="Learn more about our company and case at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals." />
        <meta name="keywords" content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality" />  
      </Helmet>
      <section className="bg-light py-5" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro">
                <h6>Our Cases You Can See</h6>
                <h1>Explore Our Latest Causes That We Works</h1>
                <p className="mx-auto">
                  By fostering inclusive environments and valuing the
                  contributions of people with disabilities, we can work towards
                  a world where everyone has the opportunity to thrive,
                  regardless of their abilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AliceCarousel
          mouseTracking
          controlsStrategy="alternate"
          autoPlay
          items={items}
          infinite
          disableButtonsControls
          responsive={responsive}
          animationType="fadeout"
          autoPlayInterval={1000}
          autoPlayDirection="rtl"
          startIndex={0}
          lazyLoad
        ></AliceCarousel>
      </section>
    </>
  );
};

export default Case;
