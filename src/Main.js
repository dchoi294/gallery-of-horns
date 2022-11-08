import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
        title='unicorn'
        imageUrl='https://m.media-amazon.com/images/I/413L6uW4ziL._AC_SY580_.jpg'
        description='cute unicorn'
        />
        <HornedBeast
        title='dog unicorn'
        imageUrl='https://www.rover.com/blog/wp-content/uploads/2019/09/corgi-unicorn-1-960x540.jpg'
        description='dog unicorn!'
        />
      </main>
    )
  }
}

export default Main;
