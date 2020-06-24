import React from 'react';
import { Link } from 'react-router-dom';

import './SingleMotorcycle.scss';
import motorcyclesData from '../../../helpers/data/motorcyclesData';

class SingleMotorcycle extends React.Component {
  state = {
    motorcycle: {},
  }

  componentDidMount() {
    const { motorcycleId } = this.props.match.params;
    motorcyclesData.getSingleMotorcycle(motorcycleId)
      .then((response) => this.setState({ motorcycle: response.data }))
      .catch((err) => console.error('unable to get single motorcycle:', err));
  }

  render() {
    const { motorcycle } = this.state;
    const { motorcycleId } = this.props.match.params;
    const modsLink = `/motorcycles/${motorcycleId}/mods`;
    const repairsLink = `/motorcycles/${motorcycleId}/repairs`;
    return (
      <div className="SingleMotorcycle col-6 offset-3">
        <h1 className="singleBikeName mt-4 mb-4 text-center">{motorcycle.name}</h1>
        <div className="card mb-5">
          <img src={motorcycle.imageUrl} className="singleBikeImage" alt="Motorcycle Pic"/>
        </div>
        <div className="singleBikeBtns mb-5">
          <Link className="modsBtn mr-5" style={{ textDecoration: 'none' }} to={modsLink}>Mods</Link>
          <Link className="repairsBtn ml-5" style={{ textDecoration: 'none' }} to={repairsLink}>Repairs</Link>
        </div>
      </div>
    );
  }
}

export default SingleMotorcycle;
