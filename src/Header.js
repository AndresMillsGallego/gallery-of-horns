import React from 'react';

import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'h1'
    }
  }

  classNameChange = () => {
    if (this.state.className === 'h1') {
      this.setState({className: 'h1Crimson'});
    } else {
      this.setState({className: 'h1'})
    }
  }

  render() {
    return (
      <header>
        <h1 className={this.state.className} onClick={this.classNameChange}>Gallery of Horns</h1>
      </header>
    )
  }
}

export default Header;