import React from 'react';
import './FeedbackOptions.css';
import PT from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      type="button"
      className="btn"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PT.arrayOf(PT.string.isRequired),
  onLeaveFeedback: PT.func.isRequired,
};

export default FeedbackOptions;
