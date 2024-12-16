import React from 'react';
import PropTypes from 'prop-types';

const ProjectBar = ({ data }) => {
  const { title, description, link } = data;

  return (
    <div className="projectbar">
      <div className="projectbar-title">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
      <div className="projectbar-description">
        {description}
      </div>
    </div>
  );
};

ProjectBar.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectBar;
