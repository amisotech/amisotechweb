import React from "react";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import PrivacyPolicy from "../components/arrangement/PrivacyPolicy";
import TermsCondition from "../components/arrangement/TermsCondition";
import RefundPolicy from "../components/arrangement/RefundPolicy";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation.jsx"
import WebDesign from "../components/service/WebDesign";
import WebDevelopment from "../components/service/WebDevelopment";
import Ecommerce from "../components/service/Ecommerce";
import MobileDevelopment from "../components/service/MobileDevelopment";
import DigitalMarketing from "../components/service/DigitalMarketing";
import GetAQuote from "../components/GetAQuote";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeLightAnimation />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/termscondition" element={<TermsCondition/>}/>
        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
        <Route path="/website-designing-company-in-gurugram-india" element={<WebDesign/>}/>
        <Route path="/custom-web-development-services-in-gurugram-india" element={<WebDevelopment/>}/>
        <Route path="/ecommerce-solution-provider-in-gurugram-india" element={<Ecommerce/>}/>
        <Route path="/mobile-app-development-company-in-gurugram-india" element={<MobileDevelopment/>}/>
        <Route path="/digital-marketing-company-in-gurugram-india" element={<DigitalMarketing/>}/>
        <Route path="/getaquote" element={<GetAQuote/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
