import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ isVisible, heading, sectionBg, children }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div>
      <h1 className="main-heading">{heading}</h1>
      <section className={`section ${sectionBg}`}>{children}</section>
    </div>
  );
};

Section.propTypes = {
  isVisible: PropTypes.bool,
  heading: PropTypes.string,
  sectionBg: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
