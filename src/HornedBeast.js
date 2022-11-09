import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites : 0
    };
  }

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img 
        onClick = {this.handleFavorites}
        variant="top"
        src={this.props.image_url}
        alt={this.props.description}
        title={this.props.title}
        />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
