import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = evt => {
    this.setState(prevState => {
      return {
        [evt]: prevState[evt] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0
      ? Math.floor((this.state.good / totalFeedback) * 100)
      : 0;
  };

  render() {
    const total = this.countTotalFeedback();
    const { good, bad, neutral } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          option={Object.keys(this.state)}
          onLeaveFeedback={this.onClick}
        />

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}

export default App;
