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
      displayModal: false,
      beast: {},
      numberOfHorns: 0
    }
  }
  
  closeModal = () => this.setState({displayModal: false});

  showSelectedBeast = (beast) => {
    this.setState({ 
      displayModal: true,
      beast
    });
  };
  
  handleHornSelection = (numberOfHorns) => {
    this.setState({numberOfHorns})
  };
  
  render() {
    console.log(this.state.numberOfHorns);
    return (
      <>
        <SelectedBeast 
          displayModal={this.state.displayModal}
          closeModal={this.closeModal}
          beast={this.state.beast}
          />
        <Header 
          numberOfHorns={this.state.numberOfHorns}
          handleHornSelection={this.handleHornSelection}
         />
        <Main 
          data={data} 
          showSelectedBeast={this.showSelectedBeast} 
          numberOfHorns={this.state.numberOfHorns}
          />
        <Footer />
      </>
    );
  }
}

export default App;
