import React from "react";
import Footer from "../footer/FooterAnimation";
import logo2 from "../../img/logo2.png"
import "../../assets/scss/additional.scss";

function PrivacyPolicy() {
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
          AmisoTech Software Pvt Ltd{" "}
        </h1>
        <h1 className="text-3xl font-semibold mb-4 text-center mt-4">
          Privacy Policy
        </h1>
        <p className="text-18px font-medium">Effective Date: 01-01-2023</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p className="text-18px font-medium">
          Welcome to AmisoTech Software Pvt Ltd! This Privacy Policy governs the
          privacy practices of our web development company, AmisoTech Software
          Pvt Ltd (referred to as "AmisoTech," "we," "us," or "our"). This
          policy outlines how we collect, use, share, and protect the personal
          information of our clients, website visitors, and users of our
          services and products. By accessing our website or using our services,
          you consent to the practices described in this Privacy Policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Information We Collect
        </h2>
        <p className="text-18px font-medium">
          We may collect various types of information, including but not limited
          to:
        </p>
        <ul className="list-disc list-inside">
          <li>
            2.1. Personal Information: This includes information that can be
            used to identify you, such as your name, email address, postal
            address, phone number, and any other information voluntarily
            provided to us.
          </li>
          <li>
            2.2. Usage Information: We collect data related to your interactions
            with our website, products, and services, such as IP addresses,
            device information, browser type, pages viewed, and the duration of
            your visit.
          </li>
          <li>
            2.3. Cookies and Similar Technologies: We use cookies and other
            tracking technologies to enhance your browsing experience and gather
            data on website usage patterns.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. How We Use Your Information
        </h2>
        <p className="text-18px font-medium">
          We use the collected information for the following purposes:
        </p>
        <ul className="list-disc list-inside">
          <li>
            3.1. Providing Services: To deliver our web development services and
            support to you, including project management, communication, and
            issue resolution.
          </li>
          <li>
            3.2. Personalization: To customize and personalize your experience
            with our website and services, making recommendations based on your
            preferences.
          </li>
          <li>
            3.3. Analytics: To analyze website usage, track trends, and improve
            our services and offerings.
          </li>
          <li>
            3.4. Marketing and Communication: To send promotional emails,
            newsletters, or other information related to our products and
            services, but only if you have opted to receive such communications.
          </li>
          <li>
            3.5. Legal Obligations: To comply with applicable laws, regulations,
            or legal processes.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. How We Share Your Information
        </h2>
        <p className="text-18px font-medium">
          We may share your information with third parties under the following
          circumstances:
        </p>
        <ul className="list-disc list-inside">
          <li>
            4.1. Service Providers: We may engage third-party service providers
            to assist us in delivering our services. These providers are
            contractually obligated to protect your information and may only use
            it for the specific purpose of assisting us.
          </li>
          <li>
            4.2. Legal Compliance: We may share your information to comply with
            legal obligations or respond to lawful requests from government
            authorities.
          </li>
          <li>
            4.3. Business Transactions: In the event of a merger, acquisition,
            or sale of all or part of our assets, your information may be
            transferred to the acquiring entity.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p className="text-18px font-medium">
          We take appropriate measures to safeguard your personal information
          against unauthorized access, disclosure, or destruction. However, no
          data transmission over the internet or electronic storage is
          completely secure. While we strive to protect your information, we
          cannot guarantee its absolute security.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Choices</h2>
        <p className="text-18px font-medium">You have the right to:</p>
        <ul className="list-disc list-inside">
          <li>
            6.1. Access and Correct Your Information: You can review and update
            your personal information by contacting us.
          </li>
          <li>
            6.2. Opt-out: You can opt-out of receiving promotional emails from
            us by following the instructions provided in the email.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Children's Privacy
        </h2>
        <p className="text-18px font-medium">
          Our services are not intended for children under the age of 13, and we
          do not knowingly collect personal information from children. If we
          learn that we have collected personal information from a child under
          13, we will take steps to delete the information as soon as possible.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          8. Changes to This Privacy Policy
        </h2>
        <p className="text-18px font-medium">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the effective date will be updated
          accordingly. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Us</h2>
        <div className="contact-info">
          <p className="text-18px font-medium">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p className="text-18px font-medium">
            AmisoTech Software Pvt Ltd
            <br />
            Address: 791/5, Udyog Vihar, Sector 19, Gurugram
            <br />
            Email: info@amisotech.com
            <br />
            Phone: +91 - 9871171533
          </p>
        </div>

        <p className="mt-6">
          By using our services or accessing our website, you signify your
          acceptance of this Privacy Policy. Thank you for choosing AmisoTech
          Software Pvt Ltd!
        </p>
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

export default PrivacyPolicy;
