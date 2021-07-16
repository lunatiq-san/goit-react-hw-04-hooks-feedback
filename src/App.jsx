import { Component } from 'react';
// import Statistics from './components/Statistics';
// import FeedbackOptions from './components/FeedbackOptions';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = stateName => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (total, stateQuantity) => total + stateQuantity,
      0,
    );

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback()
      ? Math.round((this.state.good * 100) / this.countTotalFeedback())
      : 0;

  render() {
    const {
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      incrementFeedback,
    } = this;
    const stateKeys = Object.keys(state);

    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          {stateKeys.map(key => (
            <button
              type="button"
              key={key}
              onClick={() => {
                incrementFeedback(key);
              }}
            >
              {key}
            </button>
          ))}
        </div>
        <h2>Statistics</h2>
        <p>Good: {state.good}</p>
        <p>Neutral: {state.neutral}</p>
        <p>Bad: {state.bad}</p>
        <p>Total: {countTotalFeedback()}</p>
        <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}

export default App;
