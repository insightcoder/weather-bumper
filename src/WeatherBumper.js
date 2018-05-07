import React, { Component } from 'react';
import './WeatherBumper.css';
import axios from 'axios';

class WeatherBumper extends Component {
  state = {
    city: 'My City', 
    temp: 0, 
    abbr: 'c'
  };

  constructor(props) {
    super(props);
    this.setLocation(props.woeid);
  }

  render() {
    return (
      <div className="WeatherBumper">
        <h1>
          <img src={`https://www.metaweather.com/static/img/weather/${this.state.abbr}.svg`}/>
          &nbsp;
          {this.state.city}
        </h1>
        <div>
          {this.state.temp} &#176;C
        </div>
      </div>
    );
  }

  setLocation(woeid) {

    var proxy = 'https://cors-anywhere.herokuapp.com';
    var url = `${proxy}/https://www.metaweather.com/api/location/${woeid}`;
    var config = {headers: { 'X-Requested-With': '*' }};
    
    axios.get(url, config).then(response => {

      this.setState({
        city: response.data.title, 
        temp: parseInt(response.data.consolidated_weather[0].the_temp),
        abbr: response.data.consolidated_weather[0].weather_state_abbr,
      });

    });
  }


}

export default WeatherBumper;
