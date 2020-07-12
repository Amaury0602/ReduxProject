import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';

import City from './city';

class CityList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (this.props.cities.map((city) => {
      return (<City city={city} key={city.slug} />);
    }));
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);
