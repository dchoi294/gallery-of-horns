import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
//                      LAB  1       
/*
    return (
      <article>
        <HornedBeast 
          title="unicorn"
          imageURL ="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          description = "Unicorn!!!!!"
        />  
        <HornedBeast
          title="Rhino"
          imageURL ="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
          description = "Rhino!!!"
        />
      </article>
    );
*/
//                    LAB 2
    let hornedBeastArray = [];
    data.forEach((hornbeast, index) => {
      hornedBeastArray.push(
        <HornedBeast
          id={hornbeast._id}
          image_url={hornbeast.image_url}
          title={hornbeast.title}
          description={hornbeast.description}
          keyword={hornbeast.keyword}
          horn={hornbeast.horns}
          key={index}
        />
      )
    })
    return (
      <main>
        {hornedBeastArray}
      </main>
    )

  }
}

export default Main;
