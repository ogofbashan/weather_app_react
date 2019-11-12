import React, { Component } from 'react';
import './index.css';

class WeatherInfo extends Component {
  render() {
    return(
      <div className="row WeatherInfo">
        <div className="col-md-12">
          {/* TODO: make elements below only appear when data is passed */}
          <h3>City: Boston</h3>
          <h3>Country: US</h3>
          <h3>Temperature: 45&deg;</h3>
          <h3>Humidity: 33%</h3>
          <h3>Description: Light Snowfall</h3>

          {/* TODO: show error message if improper input*/}
          <h3>Error: Invalid Input</h3>

        </div>
      </div>
    );
  }
}

export default WeatherInfo;
