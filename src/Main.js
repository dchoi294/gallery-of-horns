import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import {Form, ListGroup, Button} from 'react-bootstrap';



class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sort: '',
      sortArray: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let sortByHorns = [];
    if(this.state.sort === 1) {
      sortByHorns = this.props.data.filter(horns => horns === 1)
    } else if(this.state.sort ===2) {
      sortByHorns = this.props.data.filter(horns => horns === 2)
    } else if(this.state.sort ===3) {
      sortByHorns = this.props.data.filter(horns => horns === 3)
    } else if(this.state.sort > 3) {
      sortByHorns = this.props.data.filter(horns => horns > 3)
    } else {
      sortByHorns = this.props.data
    }
    this.setState({
      sortArray: sortByHorns
    })
  }

  handleSelet = (event) => {
    this.setState({
      sort: event.target.value
    });
  }

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

    let hornNumb = this.state.sortArray.map((arr, index) => {
      return <ListGroup.Item key={index}>{arr}</ListGroup.Item>
    })

    return (
      <main>
        <form onSubmit={this.handleSubmit}>

          <Form.Group>
            <Form.Label>Number of horns</Form.Label>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="filterOption">Select Numbers</Form.Label>
            <Form.Select id="filterOption" name="selected" onChange={this.handleSelect}>
              <option value="all">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </Form.Select>
          </Form.Group>

            <Button type="submit">Submit</Button>
          </form>

          <ListGroup>
            {hornNumb}
          </ListGroup>
      </main>
    )
  }
}

export default Main;
