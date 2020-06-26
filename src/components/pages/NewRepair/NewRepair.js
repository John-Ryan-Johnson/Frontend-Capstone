import React from 'react';

import repairsData from '../../../helpers/data/repairsData';

import './NewRepair.scss';

class NewRepair extends React.Component {
  state = {
    repairName: '',
    repairComments: '',
    repairMileage: 0,
    repairIsDone: false,
    repairIsMod: false,
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ repairName: e.target.value });
  }

  commentChange = (e) => {
    e.preventDefault();
    this.setState({ repairComments: e.target.value });
  }

  mileageChange = (e) => {
    e.preventDefault();
    this.setState({ repairMileage: e.target.value });
  }

  isDoneChange = (e) => {
    e.preventDefault();
    this.setState({ repairIsDone: e.target.checked });
  }

  isModChange = (e) => {
    e.preventDefault();
    this.setState({ repairIsMod: e.target.checked });
  }

  saveRepair = (e) => {
    e.preventDefault();
    const { motorcycleId } = this.props.match.params;
    const {
      repairName,
      repairComments,
      repairMileage,
      repairIsDone,
      repairIsMod,
    } = this.state;

    const newRepair = {
      motorcycleId,
      name: repairName,
      comments: repairComments,
      mileage: repairMileage,
      isDone: repairIsDone,
      isMod: repairIsMod,
    };
    repairsData.postRepair(newRepair)
      .then(() => this.props.history.push(`/motorcycles/${motorcycleId}/repairs`))
      .catch((err) => console.error('unable to save repair:', err));
  }

  render() {
    const {
      repairName,
      repairComments,
      repairMileage,
      repairIsDone,
      repairIsMod,
    } = this.state;
    return (
      <div className="NewRepair col-12">
        <h1 className="repairFormName mt-5 mb-5">Add Repair Form</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="repair-name">Name</label>
            <input
             type="text"
             className="form-control"
             id="repair-name"
             value={repairName}
             onChange={this.nameChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="repair-comments">Comments</label>
            <input
             type="text"
             className="form-control"
             id="repair-comments"
             value={repairComments}
             onChange={this.commentChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="repair-mileage">Mileage</label>
            <input
             type="number"
             className="form-control"
             id="repair-mileage"
             value={repairMileage}
             onChange={this.mileageChange}
             />
          </div>
          <div className="form-group form-check">
            <input
             type="checkbox"
             className="form-check-input"
             id="repair-isDone"
             value={repairIsDone}
             onChange={this.isDoneChange}
             />
             <label className="form-check-label" htmlFor="repair-isDone">Done</label>
          </div>
          <div className="form-group form-check">
            <input
             type="checkbox"
             className="form-check-input"
             id="repair-isMod"
             value={repairIsMod}
             onChange={this.isModChange}
             />
             <label className="form-check-label" htmlFor="repair-isMod">Mod</label>
          </div>
          <button className="btn saveRepairBtn mt-3" onClick={this.saveRepair}>Save</button>
        </form>
      </div>
    );
  }
}

export default NewRepair;
