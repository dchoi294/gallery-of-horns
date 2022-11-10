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
      modalShow: false,
      modalImage: '',
      modalP:''
    };
  }

  displayModal = (image, description) => {
    this.setState({
      modalShow: true,
      modalImage: image,
      modalP: description
    });
  }

  hideModal = () => {
    this.setState({
      modalShow: false
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
        <Main data={Data} displayModal={this.displayModal}/>
        <Footer/>
      </>
    );
  }
}

export default App;
