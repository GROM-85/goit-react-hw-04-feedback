import React, { useEffect, useState} from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import emojis from '../../emoji.json';
import { StatisticsComp } from 'components/Statistics';
import { NotificationComp } from 'components/Notification ';
import { Section } from 'components/Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total,setTotal] = useState(0);
  

  const calcTotal = () => {
    setTotal(bad + good + neutral);
  };

  useEffect(() => calcTotal())

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / total) * 100);
  };

  const onLeaveFeedback = (e) => {
    const { name } = e.target.dataset;
    console.log(name)
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      default:
        return;
    }
  };

  const posPercent = countPositiveFeedbackPercentage();
 
  return (
    <Container>
      <Section title="Expresso Cafe FeedbackBoard">
        <FeedbackOptions options={emojis} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {(!total && (
          <NotificationComp message="There is no feedback"></NotificationComp>
        )) || (
          <StatisticsComp
            good={good}
            bad={bad}
            neutral={neutral}
            positivePercentage={posPercent}
            total={total}
          />
        )}
      </Section>
    </Container>
  );
};


