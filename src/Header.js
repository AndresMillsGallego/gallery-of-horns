import React from 'react';
import Form from 'react-bootstrap/Form'

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
  
  collectNumberOfHorns = (event) => {
    let numberOfHorns = event.target.value;
    this.props.handleHornSelection(numberOfHorns)
  }

  render() {
    console.log(this.props.numberOfHorns);
    return (
      <header>
        <Form onChange={this.collectNumberOfHorns}>
          <label>How Many Horns?
            <select name='hornSection'>
              <option defaultValue disabled="">--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </label>
        </Form>
        <h1 className={this.state.className} onClick={this.classNameChange}>Gallery of Horns</h1>
      </header>
    )
  }
}

export default Header;