import { Component } from 'react';

import styles from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Please, leave feedback</h1>

        <button type="button" onClick={this.handleIncrement}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrement}>
          Bad
        </button>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <p></p>
        <span>Neutral: {this.state.neutral}</span>
        <p></p>
        <span>Bad: {this.state.bad}</span>
        <p></p>
      </div>
    );
  }
}

export default Counter;
