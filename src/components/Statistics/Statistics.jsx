import React, { Component } from 'react';
import { Statistics } from './Statistics.styled';
import PropsTypes from 'prop-types';

export class StatisticsComp extends Component {
  static defaultProps = {
    good:0,
    bad:0,
    neutral:0,
    positivePercentage:0,
    total:0,
  };


  render() {
    const {good,bad,neutral,positivePercentage,total} = this.props;
    return (
      <Statistics>
        <span>Good: {good}</span>
        <span>Bad: {bad}</span>
        <span>Neutral: {neutral}</span>
        <span>Positive in %: {positivePercentage}%</span>
        <span>Total: {total}</span>
      </Statistics>
    );
  }

}

Statistics.propTypes = {
    good:PropsTypes.string,
    bad:PropsTypes.string,
    neutral:PropsTypes.string,
    positivePercentage:PropsTypes.string,
    total:PropsTypes.string,
}