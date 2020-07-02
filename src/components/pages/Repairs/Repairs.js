import React from 'react';

import { Link } from 'react-router-dom';

import motorcyclesData from '../../../helpers/data/motorcyclesData';
import repairsData from '../../../helpers/data/repairsData';
import RepairCard from '../../shared/RepairCard/RepairCard';

import './Repairs.scss';

class Repairs extends React.Component {
  state = {
    motorcycle: {},
    repairs: [],
  }

  getMotorcycleWithRepair = () => {
    const { motorcycleId } = this.props.match.params;
    motorcyclesData.getSingleMotorcycle(motorcycleId)
      .then((response) => this.setState({ motorcycle: response.data }))
      .catch((err) => console.error('unable to get single motorcycle:', err));
    repairsData.getRepairsByMotorcycleId(motorcycleId)
      .then((repairs) => this.setState({ repairs }))
      .catch((err) => console.error('unable to get repairs for this motorcycle:', err));
  }

  componentDidMount() {
    this.getMotorcycleWithRepair();
  }

  removeRepair = (repairId) => {
    repairsData.deleteRepair(repairId)
      .then(() => this.getMotorcycleWithRepair())
      .catch((err) => console.error('unable to delete repair:', err));
  }

  render() {
    const { motorcycleId } = this.props.match.params;
    const newRepairLink = `/motorcycles/${motorcycleId}/repairs/new`;
    const { repairs } = this.state;
    const buildRepairCards = repairs.map((repair) => (
      <RepairCard key={repair.id} repair={repair} removeRepair={this.removeRepair}/>
    ));
    return (
      <div className="Repairs">
        <h1 className="repairs mt-4 mb-3">Repairs</h1>
        <div className="text-right mb-5">
          <Link to={newRepairLink}><i className="fas fa-plus fa-2x plusSign"></i></Link>
          <Link className="repairsBackBtn" onClick={() => this.props.history.goBack()}><i class="fas fa-times fa-2x"></i></Link>
        </div>
        <div className="d-flex flex-wrap">
          {buildRepairCards}
        </div>
      </div>
    );
  }
}

export default Repairs;
