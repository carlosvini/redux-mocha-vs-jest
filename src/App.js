import React, { Component } from 'react';
import WelcomePage from './WelcomePage';

class App extends Component {
  render() {
    return (
           <div className="App">
            <div className="App-header">
              <h2>React Test</h2>
            </div>
            <WelcomePage />
          </div>
    );
  }
}

export default App;
