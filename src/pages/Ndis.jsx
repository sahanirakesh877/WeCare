import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Ndis = () => {
  const pathname = useLocation;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>NDIS | WA Care</title>
        <meta
          name="description"
          content="Learn more about our company and team at Western Australia Care Pvt. Ltd., an NDIS provider organization committed to serving the community with respect and equality. Our core goals include providing assistance to individuals with disabilities, integrating them within the community, and helping them achieve their goals."
        />
        <meta
          name="keywords"
          content="about, about us, case, blog company, team, mission, vision, services,review, values, Western Australia Care Pvt. Ltd., NDIS, disabilities, community, respect, equality"
        />
      </Helmet>

      <div className="container px-4">
        <div className="row py-5">
          <div className="col-md-12">
            <h3 className="ndis ndis-heading">What is NDIS ?</h3>
            <p className="ndis-paragraph">
              NDIS stands for the National Disability Insurance Scheme. It's an
              Australian government initiative that provides support and
              services to people with disabilities, aiming to enhance their
              quality of life and participation in society. The NDIS operates on
              the principle of individualized support, tailoring assistance to
              the specific needs and goals of each participant. It covers a wide
              range of support services, including healthcare, therapy,
              equipment, and community access. The scheme is funded by the
              Australian government and managed by the National Disability
              Insurance Agency (NDIA).
            </p>

            <p className="ndis-paragraph">
              The mission of the NDIS is to provide comprehensive support and
              services to people with disabilities, enabling them to lead
              fulfilling lives and participate fully in their communities.
            </p>
            <p className="ndis-paragraph">
              The vision of the NDIS is to create a more inclusive society where
              people with disabilities have equal opportunities, rights, and
              access to the support they need to achieve their goals and
              aspirations.
            </p>

            <h4 className="ndis1"> NDIS Services </h4>
            <ul>
              <li>
                <strong>Support Coordination:</strong> Assistance in
                coordinating various supports, services, and funding to help
                achieve the goals outlined in the participant's plan.
              </li>
              <li>
                <strong>Therapeutic Supports:</strong> Access to allied health
                professionals such as physiotherapists, occupational therapists,
                speech therapists, and psychologists.
              </li>
              <li>
                {" "}
                <strong>Assistive Technology:</strong> Provision of aids and
                equipment tailored to the participant's needs, such as mobility
                devices, communication devices, and home modifications.
              </li>
              <li>
                <strong>Personal Care and Community Access:</strong> Assistance
                with daily living activities, including personal care, household
                tasks, and support to participate in community activities and
                events.
              </li>
              <li>
                <strong>Early Childhood Early Intervention (ECEI):</strong>{" "}
                Specialized support for children aged 0-6 and their families to
                address developmental delays or disabilities early on.
              </li>
              <li>
                <strong>Employment Supports:</strong> Assistance with skill
                development, job training, and support to find and maintain
                employment.
              </li>
              <li>
                <strong>Accommodation and Tenancy Support:</strong> Support with
                finding suitable housing options, as well as assistance in
                managing tenancy responsibilities
              </li>
              <li>
                <strong>Transport Assistance:</strong> Support for
                transportation needs, including funding for accessible transport
                services or modifications to private vehicles.{" "}
              </li>
              <li>
                <strong>Social and Recreational Activities:</strong> Access to
                programs and activities that promote social inclusion,
                recreation, and leisure opportunities.
              </li>
              <li>
                <strong>Respite Care:</strong> Temporary relief for caregivers
                by providing support to care for the participant, allowing the
                caregiver to take a break.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ndis;
