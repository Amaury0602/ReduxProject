import React, { Component } from 'react';

import City from './city';

class CityList extends Component {
  constructor(props) {
    super(props);
  }

  selectCity = (cityIndex) => {
    this.props.changeActiveCity(cityIndex);
  }

  render() {
    return (this.props.cities.map((city, index) => {
      return (<City name={city.name} index={index} selectCity={this.selectCity} key={city.slug}/>);
    }));
  }
}

export default CityList;
