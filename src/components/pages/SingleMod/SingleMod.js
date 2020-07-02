import React from 'react';
import { Link } from 'react-router-dom';

import repairsData from '../../../helpers/data/repairsData';
import './SingleMod.scss';

class SingleMod extends React.Component {
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
      <div className="SingleMod col-6 offset-3">
        <h1 className="singleModName mt-4 mb-4 text-center">{repair.name}</h1>
        <div className="card singleModCard mb-5">
          <div className="card-body">
            <div className="col-12">
              <div className="singleModCommentContainer">
                <h3 className="mb-3">Comments</h3>
                <div className="singleModComments">{repair.comments}</div>
              </div>
              <div className='singleModMileageContainer'>
                <h3 className='mt-3'>Mileage</h3>
                <div className='singleModMileage mt-3'>{repair.mileage}</div>
              </div>
              <div className='singleMod-checkbox-container'>
                <input type='checkbox' checked={repair.isDone}/>
                <label htmlFor='done'>Done</label>
              </div>
              <Link className="singleBackBtn" onClick={() => this.props.history.goBack()}><i class="fas fa-times fa-2x"></i></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleMod;
