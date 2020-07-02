import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import motorcycleShape from '../../../helpers/propz/motorcycleShape';
import './MotorcycleCard.scss';

class MotorcycleCard extends React.Component {
  static propTypes = {
    motorcycle: motorcycleShape.motorcycleShape,
    removeMotorcycle: PropTypes.func.isRequired,
  }

  render() {
    const { motorcycle, removeMotorcycle } = this.props;
    const singleLink = `/motorcycles/${motorcycle.id}`;
    const editLink = `/motorcycles/edit/${motorcycle.id}`;

    return (
      <div className="MotorcycleCard col-4">
        <div className="card bikeCard mb-5">
          <img src={motorcycle.imageUrl} className="card-img-top" alt="Motorcycle Pic"/>
          <div className="card-body">
            <h5 className="card-title bikeName">{motorcycle.name}</h5>
            <p className="card-text bikeMileage">Mileage: {motorcycle.mileage}</p>
            <div>
              <Link className="singleView" style={{ textDecoration: 'none' }} to={singleLink}>View</Link>
              <Link className="btn editBtn" to={editLink}><i className="fas fa-pencil-alt fa-2x"></i></Link>
              <button className="btn deleteBtn" onClick={() => removeMotorcycle(motorcycle.id)}><i className="fas fa-trash-alt fa-2x"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MotorcycleCard;
