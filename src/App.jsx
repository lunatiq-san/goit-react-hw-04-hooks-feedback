import { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

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

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={incrementFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
