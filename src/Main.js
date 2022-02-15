import React from 'react';
import HornedBeast from './HornedBeast';
import rhino from './Rhino.jpg'
import unicorn from './Unicorn.jpg'
import wildebeast from './Wildebeast.jpg'

class Main extends React.Component {
  render() {
    return (
      <>
      <HornedBeast 
        name="Rhino"
        description="This horned beast is a Rhinoceros.  Her name is Jean and she likes to take baths."
        src={rhino}
        />
      <HornedBeast 
        name="Unicorn"
        description="This horned beast is a Unicorn.  His name is Bruno and he is loved."
        src={unicorn}
      />
      <HornedBeast 
        name="Wildebeast"
        description="These horned beasts are Wildebeasts.  Their names are Enrique and Jonesy.  They are very sleepy."
        src={wildebeast}
      />
      </>
    )
  }
}

export default Main;