import React, { Component } from 'react';
import './index.css';

class WeatherInfo extends Component {
  render() {
    console.log(this.props.data);
    return(
      <div className="row WeatherInfo">
        <div className="col-md-12">
          {
            this.props.data.name &&
              <div>
                <h3>City: {this.props.data.name}</h3>
                <h3>Country: {this.props.data.sys.country}</h3>
                <h3>Temperature: {this.props.data.main.temp.toFixed(0)}&deg;F</h3>
                <h3>Humidity: {this.props.data.main.humidity}%</h3>
                <h3>Description: {this.props.data.weather[0].description}</h3>
              </div>
          }

          {
            this.props.data.cod=== '404' &&
              <h3>Error: {this.props.data.message}</h3>
          }


        </div>
      </div>
    );
  }
}

export default WeatherInfo;
