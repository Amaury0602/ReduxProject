import React, { Component } from 'react';


class ActiveCty extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <div>{this.props.activeCity.address}</div>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} alt=""/>
      </div>
    );
  }
}

export default ActiveCty;
