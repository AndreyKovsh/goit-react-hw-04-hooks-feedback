import React from 'react';
import PT from 'prop-types';
import './Statistic.css';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className="text">Good: {good}</li>
      <li className="text">Neutral: {neutral}</li>
      <li className="text">Bad: {bad}</li>
      <li className="text">Total: {total}</li>
      <li className="text">Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistic.propTypes = {
  label: PT.string.isRequired,
  value: PT.number.isRequired,
};
export default Statistic;
