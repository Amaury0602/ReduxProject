import React, { Component } from 'react';

import CityList from '../containers/city-list';
import ActiveCity from '../containers/active-city';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="cities">
          <CityList />
        </div>
        <ActiveCity />
      </div>
    );
  }
}

export default App;
