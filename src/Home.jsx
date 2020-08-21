import React from 'react'
import Design from './Components/Design.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="mt-4 text-primary m-3">Price List</h1>
        <Design />
      </div>
    );
  }
}

export default Home;