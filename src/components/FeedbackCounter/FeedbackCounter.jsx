import { Component } from "react";
import css from '../FeedbackCounter/FeedbackCounter.module.css'

class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  // інший синтаксис:
  // handleIncrement = (e) => {
  //   this.setState(prevState => {
  //     return { [e.target.name]: prevState[e.target.name] + 1 };
  //   });
  // };

  countTotalFeedback() {
    const feedbackNumbers = Object.values(this.state);
    let totalFeedbackNumbers = 0;

    for (const value of feedbackNumbers) {
      totalFeedbackNumbers += value;
    }

    return totalFeedbackNumbers;
  };

  countPositiveFeedbackPercentage() { 
    const positiveFeedbackNumbers = this.state.good;
    const positiveFeedbackPercent = positiveFeedbackNumbers / this.countTotalFeedback() * 100;

    return positiveFeedbackPercent.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <p className={css.feedbackTitle}>Please leave feedback</p>
        <div className={css.feedbackContorls}>
          <button className={css.btn} type="button" name="good" onClick={this.handleIncrement}>Good</button>
          <button className={css.btn} type="button" name="neutral" onClick={this.handleIncrement}>Neutral</button>
          <button className={css.btn} type="button" name="bad" onClick={this.handleIncrement}>Bad</button>
        </div>

        <p className={css.feedbackTitle}>Statistics:</p>
        <div className={css.feedbackStatistic}>
          {good !== 0 && (<p className={css.stat}>Good: {good}</p>)}
          {neutral !== 0 && (<p className={css.stat}>Neutral: {neutral}</p>)}
          {bad !== 0 && (<p className={css.stat}>Bad: {bad}</p>)}
          {this.countTotalFeedback() !== 0 && (<p className={css.stat}>Total: {this.countTotalFeedback()}</p>)}
          {this.countTotalFeedback() !== 0 && (<p className={css.stat}>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>)}
        </div>
      </>
    );
  }
}

export default FeedbackCounter;