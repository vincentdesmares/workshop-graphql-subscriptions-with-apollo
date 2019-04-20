import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Nothing to do here for now :) You should look at the{' '}
            <a className={'pink'} href="http://localhost:8080/graphql">
              playground
            </a>
            .
          </p>
        </header>
      </div>
    )
  }
}

export default App
