import React from 'react';

import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkClass: 'hiddenLink',
      andresClass: 'andres',
      text: 'My Github',
      href: 'https://github.com/AndresMillsGallego'
    }
  }

showLink = () => this.setState({linkClass: 'visibleLink', andresClass: 'clicked'});

  render() {
    return (
      <footer>
        <p onClick={this.showLink} className={this.state.andresClass}>Project by ©Andres Mills Gallego</p>
        <p className={this.state.linkClass}>👟  👉  👟  👉  👟  👉  👟  👉  👟  👉  👟</p>
        <a href={this.state.href} className={this.state.linkClass}>{this.state.text}</a>
      </footer>
    )
  }
}

export default Footer;