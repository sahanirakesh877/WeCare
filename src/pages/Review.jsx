import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Review = () => {
  const items=[
    <div className="review">
      <div className="person">
        <img src="/team_1.jpg" alt />
        <h5>Shristi Bhattarai</h5>
        <small>Web Development </small>
      </div>
      <h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quis,
        rem culpa labore voluptate ullam! In, nostrum. Dicta, vero nihil.
        Delectus minus vitae rerum voluptatum, excepturi incidunt ut, enim
        nam exercitationem optio ducimus!
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
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quis,
  rem culpa labore voluptate ullam! In, nostrum. Dicta, vero nihil.
  Delectus minus vitae rerum voluptatum, excepturi incidunt ut, enim
  nam exercitationem optio ducimus!
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
        <small>Web  Development </small>
      </div>
      <h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quis,
        rem culpa labore voluptate ullam! In, nostrum. Dicta, vero nihil.
        Delectus minus vitae rerum voluptatum, excepturi incidunt ut, enim
        nam exercitationem optio ducimus!
      </h3>
      <div className="stars">
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star" />
        <i className="bx bxs-star-half" />
      </div>
      <i className="bx bxs-quote-alt-left" />
    </div>



  ]

  const responsive = {
    0: { items: 1 },
    568: { items: 1},
    1024: { items: 1 },
  };
  return (
    <>
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
  )
}

export default Review
