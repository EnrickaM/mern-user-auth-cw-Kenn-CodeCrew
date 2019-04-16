import React, { Component } from 'react';
import './App.css';
import UserEmailHome from "./UserEmailHome";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*This is the parent component*/}
        <UserEmailHome/>
      </div>
    );
  }
}

export default App;
