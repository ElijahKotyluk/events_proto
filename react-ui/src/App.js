import React, { Component } from 'react';
import './App.css';
import API from './utils/API.js'
class App extends Component {

  componentDidMount() {
    this.goFetch()
    // API.test().then(res => {
    //   console.log(res)
    // })
  }

  // tests grabbing data from server, found in apiRoutes.js
  goFetch = () => {
    API.test()
      .then(res => 
        console.log(res))
      .catch(err => console.log(err))
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
