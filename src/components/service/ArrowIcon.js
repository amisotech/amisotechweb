import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ArrowIcon = ({ isOpen }) => {
  const icon = isOpen ? faChevronUp : faChevronDown;
  const iconColor = isOpen ? 'arrow-icon open' : 'arrow-icon';

  return <FontAwesomeIcon icon={icon} className={iconColor} />;
};

export default ArrowIcon;
