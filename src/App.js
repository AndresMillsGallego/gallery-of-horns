import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json'
import React from 'react';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: true,
      beast: {}
    }
  }

  closeModal = () => this.setState({displayModal: false});

  showSelectedBeast = (beast) => {
    this.setState({ 
      displayModal: true,
      beast
    });
  };

  render() {
    return (
      <>
        <SelectedBeast 
          displayModal={this.state.displayModal}
          closeModal={this.closeModal}
          beast={this.state.beast}
          />
        <Header />
        <Main 
          data={data} 
          showSelectedBeast={this.showSelectedBeast} 
          />
        <Footer />
      </>
    );
  }
}

export default App;
