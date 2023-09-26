import React, { useState } from "react";
import "../assets/scss/cookies.css" // Create a CSS file for styling

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  const handleConsent = () => {
    setCookie("cookieConsent", "true", 30); // Set the cookie for 30 days
    setShowConsent(false);
  };

  return (
    showConsent && (
      <div className="cookie-consent">
        <div className="cookie-content">
          <p>
            This website uses cookies to ensure you get the best experience on
            our website.
          </p>
          <button onClick={handleConsent}>Accept</button>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
