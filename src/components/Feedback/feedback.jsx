import { Component } from 'react';
import css from './feedback.module.css';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  onGoodClick = () => {
    this.setState(prev => {
      return {
        good: (prev.good += 1),
      };
    });
    console.log('counter :>> ', this.state.good);
  };

  onNeutralClick = () => {
    this.setState(prev => {
      return {
        neutral: (prev.neutral += 1),
      };
    });
    console.log('counter :>> ', this.state.neutral);
  };

  onBadClick = () => {
    this.setState(prev => {
      return {
        bad: (prev.bad += 1),
      };
    });
    console.log('counter :>> ', this.state.bad);
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
    return (
      <>
        <h2>Please leave feedback</h2>

        <div className={css.btnDiv}>
          <button
            type="button"
            className={css.button}
            onClick={this.onGoodClick}
          >
            Good
          </button>
          <button
            type="button"
            className={css.button}
            onClick={this.onNeutralClick}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.button}
            onClick={this.onBadClick}
          >
            Bad
          </button>
        </div>
        <div>
          <h3>Good: {this.state.good}</h3>
          <h3>Neutral: {this.state.neutral}</h3>
          <h3>Bad: {this.state.bad}</h3>
          <h3>Total: {this.countTotalFeedback()}</h3>
          <h3>Positive feedbacks: {this.countPositiveFeedbackPercentage()}%</h3>
        </div>
      </>
    );
  }
}

export default Feedback;
