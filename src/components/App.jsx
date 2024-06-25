import React from 'react';
import FeedbackOptions from './FeedbackPage/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './FeedbackPage/Notification/Notification';
import Statistics from './FeedbackPage/Statistics/Statistics';
import { useState } from 'react';

const App = () => {
    const [goodFeedback, setGoodFeedback] = useState(0);
    const [neutralFeedback, setNeutralFeedback] = useState(0);
    const [badFeedback, setBadFeedback] = useState(0);
    const leaveFeedback = (status) => {
      switch (status) {
        case 'good':
          setGoodFeedback(prevState => prevState + 1);
          break;
        case 'neutral':
          setNeutralFeedback(prevState => prevState + 1);
          break;
        case 'bad':
          setBadFeedback(prevState => prevState + 1);
          break;
        default:
          console.log('Error!');
      }
    };

  const totalCount = goodFeedback + neutralFeedback + badFeedback;

  const positivePercentage = Math.round(totalCount === 0 ? 0 : (goodFeedback * 100 / totalCount));

    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={leaveFeedback} />
        </Section>
        <Section title='Statistics'>
          {totalCount === 0 && (
            <Notification message={'There is no feedback'} />
          )}
          <Statistics good={goodFeedback} neutral={neutralFeedback} bad={badFeedback} total={totalCount} positivePercentage={positivePercentage} />
        </Section>
      </>
    );
}

export default App;
