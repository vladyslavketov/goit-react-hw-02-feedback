import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackContorls}>
      {options.map(option => {
        return (<button key={ option }className={css.btn} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>)
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;