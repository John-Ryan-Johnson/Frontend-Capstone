import React from 'react';

import repairsData from '../../../helpers/data/repairsData';

import './SingleRepair.scss';

class SingleRepair extends React.Component {
  state = {
    repair: {},
  }

  componentDidMount() {
    const { repairId } = this.props.match.params;
    repairsData.getSingleRepair(repairId)
      .then((response) => this.setState({ repair: response.data }))
      .catch((err) => console.error('unable to get single repair:', err));
  }

  render() {
    const { repair } = this.state;

    return (
      <div className="SingleRepair col-6 offset-3">
        <h1 className="singleRepairName mt-4 mb-4 text-center">{repair.name}</h1>
        <div className="card singleRepairCard mb-5">
          <div className="card-body">
            <div className="col-12">
              <div className="singleRepairCommentContainer">
                <h3 className="mb-3">Comments</h3>
                <div className="singleRepairComments">{repair.comments}</div>
              </div>
              <div className='singleRepairMileageContainer'>
                <h3 className='mt-3'>Mileage</h3>
                <div className='singleRepairMileage mt-3'>{repair.mileage}</div>
              </div>
              <div className='singleRepair-checkbox-container'>
                <input type='checkbox' checked={repair.isDone}/>
                <label htmlFor='done'>Done</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRepair;
