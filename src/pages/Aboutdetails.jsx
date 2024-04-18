import React from 'react'

const Aboutdetails = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row justify-content-center d-flex align-items-start ">
            <div className="col-lg-6 ">
              <div className="row">
                <h6 className="headtext">About Our Foundation</h6>
                <h3>Our Goals</h3>
                <p className="text-start  ">
                  Our core goals is to provide assistance to every person with a
                  disability to intregrate them within community, with friends
                  and family, and respect their views and values to meet their
                  goals.
                  <br />
                  Our values are essential foundation of our services: <br />
                  <ul className='fw-bold'>
                    <li >Accountability</li>
                    <li>Respect</li>
                    <li>Reference</li>
                    <li>Proactiveness and Responsiveness</li>
                  </ul>
                  Each and every team member will be fully educated and trained
                  about our organisation values and performs task accordingly.
                </p>
                <h6>Short Term Goals</h6>
                <p>Our topmost priority is to  satisfy the NDIS clients and customers. Our short term  goals include  but not  limited to:</p>
                <ul>
                    <li>grow our network in the community.</li>
                    <li>making each and every team member well skilled and knowledgeable</li>
                    <li>increase the number of participants by 45% within six months.</li>
                    <li>fulfilling the  target  numbers  of the organization.</li>
                </ul>
                <h6>Long Term Goals</h6>
                <p>Our focus will be achieving our long term goals in order to establish our company into the next level. These goals include but not limited to:</p>
                <ul>
                    <li>Adding new services to be delivered by our organization to the clients.</li>
                    <li>Taking our certified NDIS provider into the next level of registration. </li>
                    <li>Increasing the NDIS participants in the next 2 years by 100%.</li>
                    <li>Delivering conferences and short term relevant qualifications to customers.</li>
                </ul>
               
               
              </div>
            </div>
            <div className="col-lg-6">
              <div className="grid-container">
                <div className="grid-item item1">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-disabled-man-wheelchair-with-headphones_23-2150520452.jpg?t=st=1713318469~exp=1713322069~hmac=5ad1c10f8d3afe816dbd6bb91da0ab996aaf6f78afc649a91415e189c0308d68&w=826"
                    alt
                  />
                </div>
                <div className="grid-item item2">
                  <img
                    src="https://img.freepik.com/premium-photo/portrait-paralyzed-young-man-red-vest-public-park-city-sitting-wheelchair-park-chair_242111-13219.jpg?w=826"
                    alt
                  />
                </div>
                <div className="grid-item item3">
                  <img
                    src="https://img.freepik.com/premium-photo/young-woman-sitting-field_1048944-17563499.jpg?w=826"
                    alt
                  />
                </div>
                <div className="grid-item item4">
                  <img
                    src="https://img.freepik.com/free-photo/woman-wheelchair-being-sad_23-2148476592.jpg?t=st=1713318524~exp=1713322124~hmac=405591d6e9c2e91abb06949d967d8ec6a1e6e0e2a2c1abc15c279320b865b9ed&w=826"
                    alt
                  />
                </div>
              </div>
              <div className='py-5 text-wrap '>
              <h3>Vision Statement</h3>
               <p className="text-justify">We envision a world where everyone is treated as an individual  and with respect, and  where  all  people  hold the power to create opportunities for themselves and others.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutdetails
