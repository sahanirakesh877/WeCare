import React from 'react'
import { Helmet } from 'react-helmet'

const Blog = () => {
  return (
    <>
     <Helmet>
        <title>Blog | We Care</title>
        <meta name="description" content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals." />
        <meta name="keywords" content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality" />  
      </Helmet>
    <section id="blog">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="intro">
          <h6>Blog</h6>
          <h1>Disability  Articles</h1>
          <p className="mx-auto">
            Disability encompasses various physical, cognitive, sensory, and emotional impairments, highlighting the diverse nature of the disability experience.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <article className="blog-post">
          <img src="https://img.freepik.com/premium-photo/woman-wheelchair-point-view-admires-high-mountains-thrust-life_1048944-13129719.jpg?w=826" alt />
          <a href="#" className="tag">Accessibility </a>
          <div className="content">
            <small>01 Dec, 2022</small>
            <h5>Diversity of Disabilities,</h5>
            <p>
              Disability encompasses various physical, cognitive, sensory, and emotional impairments, highlighting the diverse nature of the disability experience.
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-4">
        <article className="blog-post">
          <img src="https://img.freepik.com/premium-photo/young-asian-girl-as-disability-patient-hospital-wheelchair-study-clinical-report-by-reading-physical-health-care-medical-rehabilitation-instruction-transporting-injured-ill-person_102814-7016.jpg?w=826" alt />
          <a href="#" className="tag">Programming</a>
          <div className="content">
            <small>01 April, 2024</small>
            <h5>Inherent Abilities: </h5>
            <p>
              Disability encompasses various physical, cognitive, sensory, and emotional impairments, highlighting the diverse nature of the disability experience.
            </p>
          </div>
        </article>
      </div>
      <div className="col-md-4">
        <article className="blog-post">
          <img src="https://img.freepik.com/free-photo/full-shot-woman-with-crutches_23-2149046131.jpg?t=st=1713332608~exp=1713336208~hmac=6126e8d440052d0d23d335016ac932af828fcc0c4da5a4eabbf763c3c32b3660&w=826" alt />
          <a href="#" className="tag">Marketing</a>
          <div className="content">
            <small>08 jan, 2023</small>
            <h5>Need for Advocacy</h5>
            <p>
              Disability encompasses various physical, cognitive, sensory, and emotional impairments, highlighting the diverse nature of the disability experience.                 
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Blog
