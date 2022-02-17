import React from 'react';
import Card from 'react-bootstrap/Card'

import './HornedBeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0,
    }
  }

  handleHearts = () => this.setState({ hearts: this.state.hearts + 1 });
  
  handleBeastClick = () => {
    this.handleHearts();
    this.props.showSelectedBeast(this.props.beast);
  }
  render() {
    return (
      <Card className='beastCard h-100'>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.handleBeastClick}></Card.Img>
        <Card.Text>💕: {this.state.hearts}</Card.Text>
        <Card.Text>{this.props.description}</Card.Text>
      </Card>
    )
  }
}

export default HornedBeast;