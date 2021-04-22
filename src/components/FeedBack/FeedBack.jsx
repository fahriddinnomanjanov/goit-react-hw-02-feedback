import {Component} from 'react';

class FeedBack extends Component {
    
    
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
        const { good, neutral, bad } = this.state
        const total = this.countTotalFeedback()
        const posPercentage = this.countPositiveFeedbackPercentage()
        return (
            <>
                <h2>Please leave feedback</h2>
                <button onClick={()=>this.increase("good")}>Good</button>
                <button onClick={()=>this.increase("neutral")}>Neutral</button>
                <button onClick={()=>this.increase("bad")}>Bad</button>
                
            </>
        );
    }
}

export default FeedBack;