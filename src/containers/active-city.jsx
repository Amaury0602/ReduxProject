import React, { Component } from 'react';
import { connect } from 'react-redux';



class ActiveCty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.selectedCity === null) {
      return null;
    }
    return (
      <div className="active-city">
        <h3>{this.props.selectedCity.name}</h3>
        <div>{this.props.selectedCity.address}</div>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.selectedCity.slug} `} alt="" />
      </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  console.log(reduxState.city);
  return {
    selectedCity: reduxState.selectedCity
  };
}

export default connect(mapReduxStateToProps)(ActiveCty);
