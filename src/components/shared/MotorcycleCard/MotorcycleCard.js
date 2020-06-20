import React from 'react';

import { Link } from 'react-router-dom';

import motorcycleShape from '../../../helpers/propz/motorcycleShape';
import './MotorcycleCard.scss';

class MotorcycleCard extends React.Component {
  static propTypes = {
    motorcycle: motorcycleShape.motorcycleShape,
  }

  render() {
    const { motorcycle } = this.props;
    return (
      <div className="MotorcycleCard col-6">
        <div className="card">
          <img src={motorcycle.imageUrl} className="card-img-top" alt="Motorcycle Pic"/>
          <div className="card-body">
            <h5 className="card-title bikeName">{motorcycle.name}</h5>
            <p className="card-text bikeMileage">Mileage: {motorcycle.mileage}</p>
            <Link className="singleView" style={{ textDecoration: 'none' }} to='/motorcycles/motorcycles/:motorcycleId'>View</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MotorcycleCard;
