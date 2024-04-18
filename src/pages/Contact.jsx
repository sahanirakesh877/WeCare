import React from "react";

const Contact = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
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
                    <form className="p-lg-5 col-12 row g-3">
                      <div>
                        <h1>Get in touch</h1>
                        <p>
                          Fell free to contact us and we will get back to you as
                          soon as possible
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="userName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter  your First name"
                          id="userName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="userName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          id="userName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="userName" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email address"
                          id="userName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Enter Message
                        </label>
                        <textarea
                          name
                          placeholder="Your Description please"
                          className="form-control"
                          id
                          rows={4}
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
