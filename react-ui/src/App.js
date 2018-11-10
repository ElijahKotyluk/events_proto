import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    const test = axios.get("api/")
    console.log(test)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            events_proto
          </p>
        </header>
      </div>
    );
  }
}

export default App;
