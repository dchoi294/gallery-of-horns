import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeasts from './SelectedBeast'
import './App.css';
import Data from './data.json';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: false,
      modalImage: '',
      modalP:'',
      sortByHorns: Data
    };
  }

  handleSelect = (event) => {
    event.preventDefault();

    let sort = event.target.value;
    
    console.log(sort);
    
    if(sort === '1') {
      let newSort = Data.filter(sortHorn => sortHorn.horns === 1);
      this.setState({sortByHorns: newSort});
    } else if(sort === '2') {
      let newSort = Data.filter(sortHorn => sortHorn.horns === 2);
      this.setState({sortByHorns: newSort});
    } else if(sort === '3') {
      let newSort = Data.filter(sortHorn => sortHorn.horns === 3);
      this.setState({sortByHorns: newSort});
    } else if(sort === '4+') {
      let newSort = Data.filter(sortHorn => sortHorn.horns > 3);
      this.setState({sortByHorns: newSort});
    } else {
      this.setState({sortByHorns: Data});
    }
  }

  displayModal = (image, description) => {
    this.setState({
      modalDisplay: true,
      modalImage: image,
      modalP: description
    });
  }

  hideModal = () => {
    this.setState({
      modalDisplay: false
    });
  }

  render() {
    return (
      <>
        <Header/>

        <SelectedBeasts
        modalDisplay={this.state.modalDisplay}
        modalImage={this.state.modalImage}
        modalP={this.state.modalP}
        hideModal={this.hideModal}
        />

        <Main 
        data={this.state.sortByHorns}
        displayModal={this.displayModal}
        handleSelect={this.handleSelect}
        >
        </Main>

        <Footer/>
      </>
    );
  }
}

export default App;
