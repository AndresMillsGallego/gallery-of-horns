import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

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
      this.setState({ className: 'h1Crimson' });
    } else {
      this.setState({ className: 'h1' })
    }
  }

  collectNumberOfHorns = (event) => {
    let numberOfHorns = event.target.value;
    this.props.handleHornSelection(numberOfHorns)
  }

  resetPage = () => {
    window.location.reload();
    alert('Page reset!  You get to see ALL the beasts now!')
  }

  render() {
    console.log(this.props.numberOfHorns);
    return (
      <header>
        <h1 className={this.state.className} onClick={this.classNameChange} title="Why Not Click me?">Gallery of Horns</h1>
        <Container>
          <Form className="hornForm" onChange={this.collectNumberOfHorns}>
            <Form.Group>
              <Form.Label>How Many Horns?
                <Form.Select name='hornSection' title='Choose How Many Horns Here'>
                  <option selected="selected" disabled>--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                  <option value="all">All</option>
                </Form.Select>
              </Form.Label>
            </Form.Group>
            <Button onClick={this.resetPage}>Reset Page</Button>
          </Form>
        </Container>
      </header>
    )
  }
}

export default Header;