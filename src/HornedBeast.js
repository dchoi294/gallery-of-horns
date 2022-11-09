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
        <img
          onClick={this.handleFavorites}
          src={this.props.image_url}
          alt={this.props.description}
          title={this.props.title}
        />
        <p >{this.state.favorites} favorites</p>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default HornedBeast;
