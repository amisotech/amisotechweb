import React from "react";
import Footer from "../footer/FooterAnimation";
import "../../assets/scss/additional.scss";
import logo2 from "../../img/logo2.png"
function TermsCondition() {
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


      <div
        className="max-w-3xl mx-auto p-6"
        style={{ padding: "70px", backgroundColor: "#f7f7ff" }}
      >
        <h1
          className="text-3xl font-semibold mb-4 text-center mt-4"
          style={{ color: "#ff3838" }}
        >
          AmisoTech Software Pvt Ltd
        </h1>
        <h1 className="text-3xl font-semibold mb-4 text-center mt-4">
          Terms & Conditions
        </h1>
        <p>Effective Date: 01-01-2023</p>

        <p>
          Welcome to AmisoTech Software Pvt Ltd! These Terms and Conditions
          ("Terms") govern your use of our web development services, products,
          and website. By accessing our website or using our services, you agree
          to comply with these Terms. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p>
          1.1. By using our services, you agree to be bound by these Terms, as
          well as any additional terms and conditions that may apply to specific
          services or products.
        </p>
        <p>
          1.2. If you do not agree with these Terms, please refrain from using
          our services and exit our website immediately.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Services</h2>
        <p>
          2.1. Web Development: We provide web development services tailored to
          the needs of our clients. The scope and requirements of the project
          will be agreed upon in writing between AmisoTech and the client.
        </p>
        <p>
          2.2. Client Cooperation: The client agrees to provide timely and
          necessary cooperation, including providing content, feedback, and
          approvals to facilitate the progress of the project.
        </p>
        <p>
          2.3. Project Delivery: While we strive to meet deadlines, project
          completion timelines may vary depending on the complexity of the
          project and the client's responsiveness.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Intellectual Property</h2>
        <p>
          3.1. Client Content: The client retains all intellectual property
          rights to the content they provide for the project. The client grants
          AmisoTech a non-exclusive license to use the content for the sole
          purpose of fulfilling the project requirements.
        </p>
        <p>
          3.2. AmisoTech Intellectual Property: All intellectual property rights
          to the web development products and materials created by AmisoTech,
          excluding the client's content, shall belong to AmisoTech.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Payment</h2>
        <p>
          4.1. Project Pricing: The pricing for web development services shall
          be agreed upon in advance between AmisoTech and the client. The client
          shall pay the agreed amount according to the payment schedule
          specified in the agreement.
        </p>
        <p>
          4.2. Additional Costs: Any additional work requested by the client,
          beyond the scope of the initial agreement, may incur additional costs.
          These will be communicated to the client for approval before
          commencing the work.
        </p>
        <p>
          4.3. Late Payment: In the event of late payment, AmisoTech reserves
          the right to suspend work until payment is received.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Confidentiality</h2>
        <p>
          5.1. Both parties shall treat any confidential information shared
          during the course of the project as confidential and shall not
          disclose it to any third party without prior written consent.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          6. Limitation of Liability
        </h2>
        <p>
          6.1. AmisoTech shall not be liable for any direct, indirect,
          incidental, consequential, or special damages arising from the use of
          our services or any products delivered.
        </p>
        <p>
          6.2. The client agrees to indemnify and hold AmisoTech harmless
          against any claims, losses, or damages arising from the client's use
          of the website or services.
        </p>

        <h2 className="text-xl font-semibold mt-6">7. Termination</h2>
        <p>
          7.1. Either party may terminate a project with written notice if the
          other party breaches these Terms.
        </p>
        <p>
          7.2. Upon termination, the client shall pay for the work completed up
          to that point, and any outstanding payments shall become due
          immediately.
        </p>

        <h2 className="text-xl font-semibold mt-6">
          8. Governing Law and Jurisdiction
        </h2>
        <p>
          8.1. These Terms shall be governed by and construed in accordance with
          the laws of [Jurisdiction]. Any dispute arising out of these Terms
          shall be subject to the exclusive jurisdiction of the courts of
          [Jurisdiction].
        </p>

        <h2 className="text-xl font-semibold mt-6">9. Amendments</h2>
        <p>
          9.1. AmisoTech reserves the right to modify these Terms at any time.
          Updated Terms will be posted on our website, and the effective date
          will be revised accordingly.
        </p>

        <p className="mt-4">
          By using our services or accessing our website, you acknowledge that
          you have read, understood, and agreed to these Terms and Conditions.
          If you have any questions or concerns, please contact us at:
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

export default TermsCondition;
