import React from 'react';
import HornedBeast from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import ListGroup from 'react-bootstrap/ListGroup';


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
    console.log(hornNumb)
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
            <fieldset>
              <legend>Number of horns</legend>
              <select name="selected">
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
              </select>
            </fieldset>
            <button type="submit">Submit</button>
          </form>

          <ListGroup>
            {hornedBeastArray}
          </ListGroup>
      </main>
    )
  }
}

export default Main;
