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
          id={hornbeast._id}
          image_url={hornbeast.image_url}
          title={hornbeast.title}
          description={hornbeast.description}
          keyword={hornbeast.keyword}
          horn={hornbeast.horns}
          key={index}
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
