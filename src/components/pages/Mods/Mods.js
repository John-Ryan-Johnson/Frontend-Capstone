import React from 'react';

import { Link } from 'react-router-dom';

import motorcyclesData from '../../../helpers/data/motorcyclesData';
import repairsData from '../../../helpers/data/repairsData';
import ModCard from '../../shared/ModCard/ModCard';

import './Mods.scss';

class Mods extends React.Component {
  state = {
    motorcycle: {},
    repairs: [],
  }

  getMotorcycleWithMod = () => {
    const { motorcycleId } = this.props.match.params;
    motorcyclesData.getSingleMotorcycle(motorcycleId)
      .then((response) => this.setState({ motorcycle: response.data }))
      .catch((err) => console.error('unable to get single motorcycle:', err));
    repairsData.getModsByMotorcycleId(motorcycleId)
      .then((repairs) => this.setState({ repairs }))
      .catch((err) => console.error('unable to get mods for this motorcycle:', err));
  }

  componentDidMount() {
    this.getMotorcycleWithMod();
  }

  removeRepair = (repairId) => {
    repairsData.deleteRepair(repairId)
      .then(() => this.getMotorcycleWithMod())
      .catch((err) => console.error('unable to delete repair:', err));
  }

  render() {
    const { motorcycleId } = this.props.match.params;
    const newRepairLink = `/motorcycles/${motorcycleId}/repairs/new`;
    const goBackLink = `/motorcycles/${motorcycleId}`;
    const { repairs } = this.state;
    const buildModCards = repairs.map((repair) => (
      <ModCard key={repair.id} repair={repair} removeRepair={this.removeRepair}/>
    ));
    return (
      <div className="Mods">
        <h1 className="mods mt-4 mb-3">Mods</h1>
        <div className="text-right mb-5">
          <Link to={newRepairLink}><i className="fas fa-plus fa-2x plusSign"></i></Link>
          <Link to={goBackLink} className="modsBackBtn"><i class="fas fa-times fa-2x"></i></Link>
        </div>
        <div className="d-flex flex-wrap">
          {buildModCards}
        </div>
      </div>
    );
  }
}

export default Mods;
