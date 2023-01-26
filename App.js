import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';

const style = {
  app: {
    textAlign: 'center'
  }
}

class App extends Component {
  render() {
    return (
      <div styles={style.app}>
       <Counter />
      </div>
    );
  }
}

export default App;