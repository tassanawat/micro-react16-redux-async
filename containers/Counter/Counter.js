import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Counter.css';
import * as actionCreators from '../../store/actions/index';

import Divider from 'material-ui/Divider';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControlTextField from '../../components/CounterControlTextField/CounterControlTextField';
import ResultTable from '../../components/ResultTable/ResultTable';
import UserControl from '../../components/UserControl/UserControl';

class Counter extends Component {

  state = {
    value: 5
  };

  handleChange = (value) => {
    this.setState({
      value
    });
  };

  render() {
    return (
      <div>
        <CounterOutput 
          value={this.props.ctr} />
        <CounterControl 
          label="Increment" 
          clicked={this.props.onIncrementCounter} />
        <CounterControl 
          label="Decrement" 
          clicked={this.props.onDecrementCounter} />
        <CounterControl 
          label={"Add " + this.state.value} 
          clicked={() => this.props.onAddCounter(this.state.value)} />
        <CounterControl 
          label={"Subtract " + this.state.value} 
          clicked={() => this.props.onSubtractCounter(this.state.value)} />
        <CounterControlTextField
          value={this.state.value}
          handleChange={this.handleChange.bind(this)}
        />
        <Divider />
        <ResultTable
          onStoreResult={()=> this.props.onStoreResult(this.props.ctr)}
          onDeleteResult={(id) => this.props.onDeleteResult(id)}
          storedResult={this.props.storedResult}
        />
        <Divider />
        <UserControl 
          userList={this.props.users}
          onShowUser={() => {
            this.props.onShowUser();
          }}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResult: state.res.results,
    users: state.users.userList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: (val) => dispatch(actionCreators.add(val)),
    onSubtractCounter: (val) => dispatch(actionCreators.subtract(val)),
    onStoreResult: (result) => dispatch(actionCreators.store_result(result)),
    onDeleteResult: (id) => dispatch(actionCreators.delete_result(id)),
    onShowUser: () => dispatch(actionCreators.get_user())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);