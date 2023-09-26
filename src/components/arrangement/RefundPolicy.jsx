import React from "react";
import Footer from "../footer/FooterAnimation";
import logo2 from "../../img/logo2.png"
import "../../assets/scss/additional.scss";

function RefundPolicy() {
  return (
    <div>
      <div style={{ position: "fixed", top: "0",width:"100%",backgroundColor:"#f0f0ff" }}>
  <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 30px" }}>
    <a href="/">
      <img src={logo2} alt="" width={130} height={130} />
    </a>
    <a href="/">
      <button className="goHome">
        Go Home
      </button>
    </a>
  </div>
</div>

      <div className="max-w-3xl mx-auto p-6" style={{ padding: "70px" }}>
        <h1
          className="text-3xl font-semibold mb-4 text-center mt-4"
          style={{ color: "#ff3838" }}
        >
          AmisoTech Software Pvt Ltd
        </h1>
        <h1 className="text-3xl font-semibold mb-4 text-center mt-4">
          Refund Policy
        </h1>
        <p>Effective Date: 01-01-2023</p>

        <p>
          Thank you for choosing AmisoTech Software Pvt Ltd for your web
          development needs. We are committed to providing high-quality services
          and products. However, we understand that circumstances may arise
          where a refund is necessary. This Refund Policy outlines the terms and
          conditions for requesting and processing refunds.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          1. Eligibility for Refund
        </h2>
        <p>
          1.1. Web Development Services: Refunds are eligible only for specific
          web development services that are covered by this policy. Refunds will
          not be provided for services that have been completed or delivered to
          the client.
        </p>
        <p>
          1.2. Product Sales: If AmisoTech offers any digital products for sale
          (e.g., plugins, themes), refunds may be considered under certain
          circumstances, which will be determined on a case-by-case basis.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Refund Requests</h2>
        <p>
          2.1. All refund requests must be submitted in writing to AmisoTech
          within [number] days of the project's commencement or the purchase of
          the product.
        </p>
        <p>
          2.2. The client or purchaser must provide a detailed explanation of
          the reasons for the refund request, including any relevant evidence or
          documentation to support the claim.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Grounds for Refund</h2>
        <p>3.1. Refunds may be granted in the following situations:</p>
        <ul className="list-disc list-inside">
          <li>
            a) Unsatisfactory Service: If the client is not satisfied with the
            quality of the web development services provided and can demonstrate
            substantial grounds for dissatisfaction.
          </li>
          <li>
            b) Unfulfilled Obligations: If AmisoTech fails to fulfill its
            obligations as agreed upon in the project scope, timeline, or
            contract.
          </li>
          <li>
            c) Product Issues: If the purchased digital product is defective,
            malfunctioning, or significantly different from its description.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. Refund Process</h2>
        <p>
          4.1. Upon receiving a refund request, AmisoTech will review the claim
          and may seek additional information or clarification from the client
          or purchaser, if necessary.
        </p>
        <p>
          4.2. AmisoTech will make a decision regarding the refund request
          within [number] days of receiving the complete information.
        </p>
        <p>
          4.3. If the refund request is approved, the refund will be processed
          within [number] days of the decision.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Refund Amount</h2>
        <p>
          5.1. The refund amount, if granted, will be limited to the actual fees
          paid by the client or purchaser for the specific service or product.
        </p>
        <p>
          5.2. AmisoTech may withhold any applicable transaction fees or charges
          associated with the refund.
        </p>

        <h2 className="text-xl font-semibold mt-6">6. Non-Refundable Items</h2>
        <p>
          6.1. Certain services or products may be explicitly labeled as
          non-refundable, and no refund requests will be entertained for such
          items.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          7. Termination of Project
        </h2>
        <p>
          7.1. In cases where a refund is granted, the project will be
          considered terminated, and all rights to the work done by AmisoTech
          will revert to AmisoTech.
        </p>

        <h2 className="text-xl font-semibold mt-6">8. Amendments</h2>
        <p>
          8.1. AmisoTech reserves the right to modify this Refund Policy at any
          time. Updated policies will be posted on our website, and the
          effective date will be revised accordingly.
        </p>

        <p className="mt-4">
          By using our services or purchasing our products, you acknowledge that
          you have read, understood, and agreed to this Refund Policy. If you
          have any questions or concerns, please contact us at:
        </p>

        <div className="contact-info mt-2">
          <p>
            AmisoTech Software Pvt Ltd
            <br />
            Address: 791/5, Udyog Vihar, Sector 19, Gurugram
            <br />
            Email: info@amisotech.com
            <br />
            Phone: +91 - 9871171533
          </p>
        </div>
      </div>

      <footer className="footer white">
        <div
          className="d-flex justify-content-between px-5"
          id="footer_container"
        >
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default RefundPolicy;
