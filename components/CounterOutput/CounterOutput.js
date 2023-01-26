import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { useSelector } from 'react-redux';

import './CounterOutput.css';

const counterOutput = (props) => {
  
  //const counter = useSelector(state => state.counter);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography type="title" color="inherit">
          Current Counter: {props.value}
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default counterOutput;