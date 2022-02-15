import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: 0
    }
  }

  handleHearts = () => this.setState({ hearts: this.state.hearts + 1 });
  
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt={this.props.title} title={this.props.title} onClick={this.handleHearts}></img>
        <p>💕: {this.state.hearts}</p>
        <p>{this.props.description}</p>
      </section>
    )
  }
}

export default HornedBeast;