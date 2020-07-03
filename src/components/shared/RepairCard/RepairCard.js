import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import repairShape from '../../../helpers/propz/repairShape';
import './RepairCard.scss';

class RepairCard extends React.Component {
  static propTypes = {
    repair: repairShape.repairShape,
    removeRepair: PropTypes.func.isRequired,
  }

  render() {
    const { motorcycleId } = this.props.match.params;
    const { repair, removeRepair } = this.props;
    const singleRepairLink = `/repairs/${repair.id}`;
    const repairEditLink = `/motorcycles/${motorcycleId}/repairs/${repair.id}/edit`;
    return (
      <div className='RepairCard col-4'>
        <div className='card repairCard card-flip mt-3 mb-3'>
          <div className='card-front'>
            <div className='card-body'>
              <h2 className='card-title repairName'>{repair.name}</h2>
            </div>
          </div>
          <div className='card-back'>
            <div className='card-body'>
              <div className='col-12'>
                <div className='comment-container'>
                  <h5>Comments</h5>
                  <div className='repairComments text-left'>{repair.comments}</div>
                </div>
                <div className='mileage-container'>
                  <h5 className='mt-2'>Mileage</h5>
                  <div className='repairMileage text-left mt-3'>{repair.mileage}</div>
                </div>
                <div className='checkbox-container'>
                  <input type='checkbox' checked={repair.isDone}/>
                  <label htmlFor='done'>Done</label>
                </div>
                <div className="div mt-4">
                  <Link className="singleRepairView" style={{ textDecoration: 'none' }} to={singleRepairLink}>View</Link>
                  <Link className="btn editRepairBtn" to={repairEditLink}><i className="fas fa-pencil-alt fa-2x"></i></Link>
                  <button className="btn deleteRepairBtn" onClick={() => removeRepair(repair.id)}><i className="fas fa-trash-alt fa-2x"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RepairCard);
