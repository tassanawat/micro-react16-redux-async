import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import './CounterControlTextField.css';

class CounterControlTextField extends Component {

  state = {
    value: this.props.value
  }

  onChangeHandler = (event) => {
    this.setState({value: event.target.value});
    this.props.handleChange(event.target.value);
  }

  render() {
    return (
      <TextField
        id="number"
        label="Number"
        className="CounterControlTextField"
        value={this.state.value}
        onChange={this.onChangeHandler.bind(this)}
        type="number"
        margin="normal"
      />
    );
  }
};

export default CounterControlTextField;