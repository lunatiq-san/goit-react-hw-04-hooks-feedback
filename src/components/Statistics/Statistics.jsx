import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
      <p className={styles.text}>Total: {total}</p>
      <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
