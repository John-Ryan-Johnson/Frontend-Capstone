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
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='RepairCard col-4'>
            <div className='card repairCard card-flip'>
              <div className='card-front'>
                <div className='card-body'>
                  <h3 className='card-title repairName'>{repair.name}</h3>
                </div>
              </div>
              <div className='card-back'>
                <div className='card-body'>
                  <div className="col-12">
                    <div className="comment-container">
                      <h5>Comments</h5>
                      <div className="repairComments">{repair.comments}</div>
                    </div>
                    <div className="mileage-container">
                      <h5 className="mt-2">Mileage</h5>
                      <div className="repairMileage mt-3">{repair.mileage}</div>
                    </div>
                  </div>
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
