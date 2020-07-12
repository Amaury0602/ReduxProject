import React, { Component } from 'react';


class City extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.selectCity(this.props.index);
  }

  render() {
    return (<div className="list-group-item" index={this.props.index} onClick={this.handleClick}>{this.props.name}</div>);
  }
}

export default City;
