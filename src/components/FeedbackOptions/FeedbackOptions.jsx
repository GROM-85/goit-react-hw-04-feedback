import React from 'react';
import { FeedbackCss } from './FeedbackOptions.styled';
import { ButtonComponent } from 'components/Button';
import PropTypes from 'prop-types';

export const FeedbackOptions  = ({options,onLeaveFeedback}) =>{
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


FeedbackOptions.propTypes = {
    options:PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
