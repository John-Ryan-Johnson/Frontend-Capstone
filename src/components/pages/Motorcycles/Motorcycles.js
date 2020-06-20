import React from 'react';

import { Link } from 'react-router-dom';

import './Motorcycles.scss';

class Motorcycles extends React.Component {
  editMotorcycleEvent = (e) => {
    e.preventDefault();
    const motorcycleId = 'monkeyButt25';
    this.props.history.push(`/motorcycles/edit/${motorcycleId}`);
  }

  render() {
    return (
      <div>
        <h1>Motorcycles</h1>
        <button className="btn btn-dark" onClick={this.editMotorcycleEvent}>Edit Motorcycle</button>
        <Link to='/motorcycles/motorcycles/motorcycle1'>View Single Motorcycle</Link>
        <Link to='/motorcycles/new'>New Motorcycle</Link>
      </div>
    );
  }
}

export default Motorcycles;
