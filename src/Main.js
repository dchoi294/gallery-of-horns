import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
        title='unicorn'
        imageUrl='https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F413L6uW4ziL._AC_SY580_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FOne-Fire-Unicorns-Changing-Birthday%2Fdp%2FB099DGQ77F&tbnid=m5nC2lrL56TlLM&vet=12ahUKEwjQkPfynZ_7AhUhKX0KHTCGAaQQ94IIKAB6BQgBEMgD..i&docid=jBh2rGK-cSroIM&w=500&h=500&q=unicorn&hl=en&ved=2ahUKEwjQkPfynZ_7AhUhKX0KHTCGAaQQ94IIKAB6BQgBEMgD'
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
