import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Main.css'

class Main extends React.Component {

  render() {
    let mainBeastArray =[];
    let filteredBeastArray = this.props.data.filter(beast => beast.horns === +this.props.numberOfHorns)
    if (!this.props.numberOfHorns) {
      mainBeastArray = this.props.data
    } else if (this.props.numberOfHorns === '4+') {
      mainBeastArray = this.props.data.filter(beast => beast.horns > 3);
    } else {
      mainBeastArray = filteredBeastArray
    }
      let hornedBeasts = mainBeastArray.map((beast, index) => (
        <Col key={index} className="mb-4">
          <HornedBeast
            beast={beast}
            showSelectedBeast={this.props.showSelectedBeast}
          />
        </Col>
    ));
    
    return (
      <main>
        <Row xs={1} md={2} lg={3} xl={4}>
          {hornedBeasts}
        </Row>
      </main>
    )
  }
}

export default Main;