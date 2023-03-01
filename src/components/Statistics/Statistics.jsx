import React from 'react';
import { Statistics } from './Statistics.styled';
import PropsTypes from 'prop-types';


export const StatisticsComp = ({good=0,bad=0,neutral=0, positivePercentage=0,total=0,}) =>{
  return (
    <Statistics>
      <span>Good: {good}</span>
      <span>Bad: {bad}</span>
      <span>Neutral: {neutral}</span>
      <span>Positive: {positivePercentage}%</span>
      <span>Total: {total}</span>
    </Statistics>
  );
} 


Statistics.propTypes = {
    good:PropsTypes.string,
    bad:PropsTypes.string,
    neutral:PropsTypes.string,
    positivePercentage:PropsTypes.string,
    total:PropsTypes.string,
}