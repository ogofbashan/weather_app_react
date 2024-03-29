import React, { Component } from 'react';
import './index.css';

class WeatherForm extends Component {
  render() {
    return(
      <div className="row WeatherForm">
        <div className="col-md-12">
          <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <input type="submit" value="Get Weather" />
          </form>
        </div>
      </div>
    );
  }
}

export default WeatherForm;
