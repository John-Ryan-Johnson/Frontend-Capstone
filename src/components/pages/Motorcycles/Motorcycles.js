import React from 'react';

import { Link } from 'react-router-dom';

import authData from '../../../helpers/data/authData';
import motorcyclesData from '../../../helpers/data/motorcyclesData';
import MotorcycleCard from '../../shared/MotorcycleCard/MotorcycleCard';

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

  removeMotorcycle = (motorcycleId) => {
    motorcyclesData.deleteMotorcycle(motorcycleId)
      .then(() => this.getMotorcycles())
      .catch((err) => console.error('unable to delete motorcycle:', err));
  }

  render() {
    const { motorcycles } = this.state;
    const buildMotorcycleCards = motorcycles.map((motorcycle) => (
      <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} removeMotorcycle={this.removeMotorcycle}/>
    ));
    return (
      <div>
        <h1 className="bikes mt-4 mb-3">My Rides</h1>
        <div className="text-right mb-5">
          <Link to='/motorcycles/new'><i className="fas fa-plus fa-2x plusSign"></i></Link>
        </div>
        <div className="d-flex flex-wrap">
          {buildMotorcycleCards}
        </div>
      </div>
    );
  }
}

export default Motorcycles;
