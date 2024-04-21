import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Helmet } from "react-helmet";

const Review = () => {
  const items = [
    <div className="review">
      <div className="person">
        <img src="/team_1.jpg" alt />
        <h5>Shristi Bhattarai</h5>
        <small>Leader</small>
      </div>
      <h3>
      Highlighting the urgent need for disability assistance, this organization excels in its impactful efforts, providing invaluable support to the disabled community.
      </h3>
      <div className="stars">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star-half" />
      </div>
      <i className="bx bxs-quote-alt-left" />
    </div>,

    <div className="review">
      <div className="person">
        <img src="/team_2.jpg" alt />
        <h5>Udit Yadav</h5>
        <small>IT Manager</small>
      </div>
      <h3>
      can't thank this organization enough for the assistance they've provided. Their commitment to helping disabled individuals navigate various challenges is truly inspiring, and I'm grateful for their unwavering support
      </h3>
      <div className="stars">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star-half" />
      </div>
      <i className="bx bxs-quote-alt-left" />
    </div>,

    <div className="review">
      <div className="person">
        <img src="/team_3.jpg" alt />
        <h5>Ranzeth sahani</h5>
        <small>Director of Charity</small>
      </div>
      <h3>
      I've been positively impacted by the services provided for disabled individuals. It's heartwarming to see an organization that prioritizes accessibility and works tirelessly to create a supportive environment for everyone
      </h3>
      <div className="stars">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star-half" />
      </div>
      <i className="bx bxs-quote-alt-left" />
    </div>,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <>
     <Helmet>
        <title>Client Review | We Care</title>
        <meta name="description" content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals." />
        <meta name="keywords" content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality" />  
           </Helmet>
      <section className="bg-light" id="reviews">
        <div className=" container">
          <AliceCarousel
            mouseTracking
            controlsStrategy="alternate"
            autoPlay
            items={items}
            infinite
            disableButtonsControls
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            startIndex={0}
            lazyLoad
          ></AliceCarousel>
        </div>
      </section>
    </>
  );
};

export default Review;
