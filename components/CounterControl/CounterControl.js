import React from 'react';
import Button from 'material-ui/Button';

import './CounterControl.css';

const counterControl = (props) => (
    <Button raised className="CounterControl" onClick={props.clicked}>
        {props.label}
    </Button>
);

export default counterControl;