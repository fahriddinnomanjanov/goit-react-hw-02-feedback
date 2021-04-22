import { Component } from 'react';
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

    increase = (statName) => {
        this.setState((prevState) => ({
            [statName]: prevState[statName] + 1
        }))
    }

    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
        const result = good + neutral + bad;
        return result;
    }


    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback()
        if (!total) {
           return 0 
        }
        const result = (good / total) * 100;
        return result.toFixed(2) 
    }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    const posPercentage = this.countPositiveFeedbackPercentage()
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.increase} />
        </Section>
        {total > 0 ? <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} posPercentage={ posPercentage }/>
        </Section> :  <Notification message="No feedback given"></Notification>   }
        
     
      
      </>
    );
  }
}

export default App;