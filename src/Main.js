import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {

  

  render() {
    let beasts = this.props.data.map((hornbeast) => {
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
        <Form>
          <Form.Group className="selectedHorns">
            <Form.Label htmlFor="Select">Select Number of Horns</Form.Label>
            <Form.Select id="formSelect" onChange={this.props.handleSelect}>
              <option value="all">All</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value="4+">4+</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <div>
          {beasts}
        </div>
      </main>
    )
  }
}

export default Main;
