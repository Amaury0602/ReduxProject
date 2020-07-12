import React, { Component } from 'react';

import CityList from '../containers/city-list';
import ActiveCity from '../containers/active-city';

import cities from '../cities';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCityIndex: 0
    };
  }

  changeActiveCity = (cityIndex) => {
    this.setState({
      activeCityIndex: cityIndex
    });
  }

  render() {
    return (
      <div className="app">
        <div className="cities">
          <CityList cities={cities} changeActiveCity={this.changeActiveCity}/>
        </div>
          <ActiveCity activeCity={cities[this.state.activeCityIndex]}/>
      </div>
    );
  }
}

export default App;
