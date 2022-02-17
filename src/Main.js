import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Main.css'

class Main extends React.Component {
  render() {
    let hornedBeasts = this.props.data.map((beast, index) => (
        <Col key={index} className="mb-4">
          <HornedBeast
            key={index}
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
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