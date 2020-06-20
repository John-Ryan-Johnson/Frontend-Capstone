import React from 'react';

import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import motorcyclesData from '../../../helpers/data/motorcyclesData';

import './Motorcycles.scss';

class Motorcycles extends React.Component {
  state = {
    motorcycles: [],
  }

  getMotorcycles = () => {
    const uid = authData.getUid();
    motorcyclesData.getMotorcyclesByUid(uid)
      .then((motorcycles) => this.setState({ motorcycles }))
      .catch((err) => console.error('unable to get motorcycles:', err));
  }

  componentDidMount() {
    this.getMotorcycles();
  }

  render() {
    const { motorcycles } = this.state;
    const buildMotorcycleCards = motorcycles.map((motorcycle) => (
      <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle}/>
    ));
    return (
      <div>
        <h1>My Motorcycles</h1>
        <Link to='/motorcycles/new'><i className="fas fa-plus"></i></Link>
        <div className="d-flex flex-wrap">
          {buildMotorcycleCards}
        </div>
      </div>
    );
  }
}

export default Motorcycles;
