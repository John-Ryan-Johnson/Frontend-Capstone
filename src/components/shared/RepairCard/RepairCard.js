import React from 'react';
import { Link } from 'react-router-dom';

import repairShape from '../../../helpers/propz/repairShape';
import './RepairCard.scss';

class RepairCard extends React.Component {
  static propTypes = {
    repair: repairShape.repairShape,
  };

  render() {
    const { repair } = this.props;
    const singleRepairLink = `/repairs/${repair.id}`;
    return (
      <div className='RepairCard col-4'>
        <div className='card repairCard card-flip'>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RepairCard;