import React, { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import emojis from '../../emoji.json';
import { StatisticsComp } from 'components/Statistics';
import { NotificationComp } from 'components/Notification ';
import { Section } from 'components/Section/Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let feedback of Object.values(this.state)) {
      console.log(feedback);
      total += feedback;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.ceil((good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = e => {
    this.setState(prev => {
      let name = e.target.dataset.name;
      return {
        [name]: prev[name] + 1,
      };
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const posPercent = this.countPositiveFeedbackPercentage();
    return (
      <Container >
        <Section title="Expresso Cafe FeedbackBoard">
        <FeedbackOptions
          options={emojis}
          onLeaveFeedback={this.onLeaveFeedback}
        />
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
  }
}
