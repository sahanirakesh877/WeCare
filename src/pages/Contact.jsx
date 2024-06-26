import React, { useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/api/v1/contactdata", formData);
     
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      toast.success('Your Record has been sent successfully!');

    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Contact | We Care</title>
        <meta
          name="description"
          content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />
      </Helmet>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-0">
              <div className="container-fluid">
                <div className="row gy-4">
                  <div
                    className="col-lg-4 col-sm-12 bg-cover"
                    style={{
                      backgroundImage:
                        'url("https://img.freepik.com/free-photo/adult-men-working-together-project_23-2148483877.jpg?t=st=1713333650~exp=1713337250~hmac=cb68cad487ab153c3ec4965cd97a1ccbfa5d6afff046912b786ba3116f99571e&w=360")',
                      minHeight: 300,
                    }}
                  >
                    <div />
                  </div>
                  <div className="col-lg-8">
                    <form
                      className="p-lg-5 col-12 row g-3"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <h1 className="text-brand">Get in touch with us</h1>
                        <p>
                          Feel free to contact us and we will get back to you as
                          soon as possible
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="name" className="form-label">
                          Full name
                        </label>
                        <input
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          className="form-control"
                          placeholder="Enter your Full name"
                          id="name"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="phone" className="form-label">
                          Phone
                        </label>
                        <input
                           value={formData.phone}
                          onChange={handleChange}
                          type="number"
                          className="form-control"
                          placeholder="Your Phone Number"
                          id="phone"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Enter Message
                        </label>
                        <textarea
                          name="message"
                          placeholder="Your Description please"
                          className="form-control"
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-brand">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
