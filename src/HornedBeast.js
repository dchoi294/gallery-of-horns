import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites : 0
    };
  }

  handleFavorites = () => {
    this.state({
      favorites: this.state.favorites + 1
    });
  }

  render() {
    return (
      <article>
        <h2>{this.props.name}</h2>
        <p>{this.state.favorites} favorites</p>
        <p onClick={this.handleFavorites}> :D</p>
        <img 
          src={this.props.imageURL}
          alt={this.props.description}
          title={this.props.title}
        />
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;
