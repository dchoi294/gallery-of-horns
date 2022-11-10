import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    let hornedBeastArray = [];

    hornedBeastArray = this.props.data.map((hornbeast) => {
      return(
        <HornedBeast
        displayModal={this.props.displayModal}
        key={hornbeast._id}
        image_url={hornbeast.image_url}
        title={hornbeast.title}
        description={hornbeast.description}
        keyword={hornbeast.keyword}
        horn={hornbeast.horns}
        />
      )
    });

    return (
      <main>
        {hornedBeastArray}
      </main>
    )
  }
}

export default Main;
