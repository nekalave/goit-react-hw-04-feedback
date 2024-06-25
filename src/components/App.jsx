import React, { Component } from 'react';
import FeedbackOptions from './FeedbackPage/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './FeedbackPage/Notification/Notification';
import Statistics from './FeedbackPage/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (status) => {
    this.setState((prevState) => {
      return { [status]: prevState[status] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    let count = this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad);
    return parseInt(count);
  }

  render() {

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.leaveFeedback} />
        </Section>
        <Section title='Statistics'>
          <Notification message={"There is no feedback"} total={total}/>
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Section>
      </>
    );
  }
}

export default App;
