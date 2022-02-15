import React from 'react';
import HornedBeast from './HornedBeast';

import './Main.css'

class Main extends React.Component {
  render() {
    let hornedBeasts = [];
    this.props.data.forEach((beast, index) => {
      hornedBeasts.push(
        <HornedBeast
          key={index}
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
        />
      )
    })
    return (
      <main>
        {hornedBeasts}
        </main>  
    )
  }
}

export default Main;