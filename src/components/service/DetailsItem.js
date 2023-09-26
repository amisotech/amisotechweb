import React, { useState } from 'react';
import ArrowIcon from './ArrowIcon';
// import './DetailsItem.css'; // Import the CSS file for this component

const DetailsItem = ({ summary, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`details-item ${isOpen ? 'open' : ''}`}>
      <div className="summary" onClick={toggleDetails} style={{color:isOpen?"#ff3838":"black"}}>
        {summary}
        <ArrowIcon isOpen={isOpen} />
      </div>
      {isOpen && <p className="details-content">{content}</p>}
    </div>
  );
};

export default DetailsItem;
