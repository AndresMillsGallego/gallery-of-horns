import React from 'react';

import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'hiddenLink',
      text: 'My Github',
      href: 'https://github.com/AndresMillsGallego'
    }
  }

showLink = () => this.setState({className: 'visibleLink'});

  render() {
    return (
      <footer onClick={this.showLink}>
        <p>Project by ©Andres Mills Gallego</p>
        <a href={this.state.href} className={this.state.className}>{this.state.text}</a>
      </footer>
    )
  }
}

export default Footer;