import React from 'react';
import { Link } from 'react-router-dom';

import repairShape from '../../../helpers/propz/repairShape';
import './RepairCard.scss';

class RepairCard extends React.Component {
  static propTypes = {
    repair: repairShape.repairShape,
  }

  render() {
    const { repair } = this.props;
    const singleRepairLink = `/repairs/${repair.id}`;
    return (
      <div className="RepairCard col-4">
        <div className="card repairCard">
          <div className="card-body">
            <h3 className="card-title repairName">{repair.name}</h3>
            <div>
            <Link className="singleRepairView" style={{ textDecoration: 'none' }} to={singleRepairLink}>View</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepairCard;
