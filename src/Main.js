import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let hornedBeastArray = [];
    data.forEach((hornbeast, index) => {
      hornedBeastArray.push(
        <HornedBeast
          key={index}
          image_url={hornbeast.image_rul}
          title={hornbeast.title}
          description={hornbeast.description}
          keyword={hornbeast.keyword}
          horn={hornbeast.horns}
        />
      )
    })
    return (
      <main>
        {hornedBeastArray}
      </main>
    )
  }
}

export default Main;
