import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.selectCity(this.props.city);
  }

  render() {
    return (<div className="list-group-item" onClick={this.handleClick}>{this.props.city.name}</div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch);
}

function mapReduxStateToProps(reduxState) {
  console.log(reduxState.city);
  return {
    selectedCity: reduxState.selectedCity
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);
