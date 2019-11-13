import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Weather from './views/weather';
import Racer from './views/racer';
import Checkout from './views/checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path = '/weather' render ={() => <Weather />} />
            <Route exact path = '/racer' render ={() => <Racer />}/>
            <Route exact path = '/checkout' render = {() => <Checkout />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
