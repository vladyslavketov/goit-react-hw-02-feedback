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

  // countTotalFeedback() {};
  // countPositiveFeedbackPercentage() { };

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
        </div>
      </>
    );
  }
}

export default FeedbackCounter;