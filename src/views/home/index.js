import React, { Component } from 'react';
import './index.css';
import WeatherTitle from '../../components/weatherTitle';
import WeatherForm from '../../components/weatherForm';
import WeatherInfo from '../../components/weatherInfo';
import API_KEY from '../../config.js';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data : [],
      API_KEY : '',
    }
  }

  componentDidMount() {
    //if the name of the variable to be set, is the same as the key inside of the state, then you do not need to write out both names, you can simply write out the single name
    this.setState({ API_KEY });
  }

  getWeather = async(e) => {
    e.preventDefault();

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    console.log(city,country);

    //TODO : query weather api with city and Country
    //TODO: turn response into json
    //TODO: update state data with json response
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-4">
          <WeatherTitle />
        </div>
        <div className="col-md-8">
          <WeatherForm getWeather={this.getWeather}/>
          <WeatherInfo />
        </div>
      </div>
    );
  }
}

export default Home;
