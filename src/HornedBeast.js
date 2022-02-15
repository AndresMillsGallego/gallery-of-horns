import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.name}</h2>
      <img src={this.props.src} alt={this.props.name} title={this.props.name}></img>
      <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeast;