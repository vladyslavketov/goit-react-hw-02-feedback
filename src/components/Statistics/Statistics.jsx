import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.feedbackStatistic}>
      <li className={css.stat}>Good: {good}</li>
      <li className={css.stat}>Neutral: {neutral}</li>
      <li className={css.stat}>Bad: {bad}</li>
      <li className={css.stat}>Total: {total}</li>
      <li className={css.stat}>Positive feedback: {positivePercentage} %</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;