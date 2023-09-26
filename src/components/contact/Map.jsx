import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.169668361312!2d77.08212027518772!3d28.504542575734913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d4ddbb541d%3A0xcdc5a9e5ad806c50!2sAmisoTech%20Software%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1689774668514!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
