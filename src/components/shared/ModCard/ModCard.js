import React from 'react';
import { Link } from 'react-router-dom';

import repairShape from '../../../helpers/propz/repairShape';
import './ModCard.scss';

class ModCard extends React.Component {
  static propTypes = {
    repair: repairShape.repairShape,
  };

  render() {
    const { repair } = this.props;
    const singleModLink = `/mods/${repair.id}`;
    return (
      <div className='ModCard col-4'>
        <div className='card modCard card-flip'>
          <div className='card-front'>
            <div className='card-body'>
              <h2 className='card-title modName'>{repair.name}</h2>
            </div>
          </div>
          <div className='card-back'>
            <div className='card-body'>
              <div className='col-12'>
                <div className='comment-container'>
                  <h5>Comments</h5>
                  <div className='modComments text-left'>{repair.comments}</div>
                </div>
                <div className='mileage-container'>
                  <h5 className='mt-2'>Mileage</h5>
                  <div className='modMileage text-left mt-3'>{repair.mileage}</div>
                </div>
                <div className='checkbox-container'>
                  <input type='checkbox' checked={repair.isMod}/>
                  <label htmlFor='done'>Done</label>
                </div>
                <div className="div mt-4">
                  <Link className="singleModView" style={{ textDecoration: 'none' }} to={singleModLink}>View</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModCard;
