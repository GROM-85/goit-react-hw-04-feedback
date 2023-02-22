import React, { Component } from 'react';
import { FeedbackCss } from './FeedbackOptions.styled';
import { ButtonComponent } from 'components/Button';
import PropTypes from 'prop-types';


export class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
    onLeaveFeedback: () => null,
  };
  render(){
    const {options,onLeaveFeedback} = this.props;
    return (
      <FeedbackCss>
        {options.map(option => (
          <ButtonComponent 
            key={option.id}
            url={option.imageUrl}
            name={option.name} 
            callback={onLeaveFeedback}
            />
        ))}
      </FeedbackCss>
    );
  }
}

FeedbackOptions.propTypes = {
    options:PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
