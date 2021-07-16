import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={styles.container}>
        {options.map(option => (
          <button
            type="button"
            key={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
            className={styles.button}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
