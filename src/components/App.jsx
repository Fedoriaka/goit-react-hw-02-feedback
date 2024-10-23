import React, { Component } from 'react';
import { FeedbackButtons } from "./FeedbackButtons/Buttons";
import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (total === 0) {
      return 0;
    }

    const percante = ((good / total) * 100).toFixed(0);
    return percante;
}
  render() {
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div
      style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
      }}
      >
        <Section title="Please leave feedback">
          <FeedbackButtons
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackButtons>
        </Section>

        {total === 0 ? (<Notification message="There is no feedback"/>) : (<Section title="Statistic">
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          ></Statistic>
        </Section>)}
      </div>
    );
  }
};
