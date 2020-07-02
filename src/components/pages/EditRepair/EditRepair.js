import React from 'react';
import { Link } from 'react-router-dom';

import repairsData from '../../../helpers/data/repairsData';

import './EditRepair.scss';

class EditRepair extends React.Component {
  state = {
    repairName: '',
    repairComments: '',
    repairMileage: 0,
    repairIsDone: false,
    repairIsMod: false,
  };

  componentDidMount() {
    const editId = this.props.match.params.repairId;
    repairsData.getSingleRepair(editId)
      .then((response) => {
        const repair = response.data;
        this.setState({
          repairName: repair.name,
          repairComments: repair.comments,
          repairMileage: repair.mileage,
          repairIsDone: repair.isDone,
          repairIsMod: repair.isMod,
        });
      })
      .catch((err) => console.error('unable to get repair to edit:', err));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ repairName: e.target.value });
  };

  commentChange = (e) => {
    e.preventDefault();
    this.setState({ repairComments: e.target.value });
  };

  mileageChange = (e) => {
    e.preventDefault();
    this.setState({ repairMileage: e.target.value });
  };

  isDoneChange = (e) => {
    e.preventDefault();
    this.setState({ repairIsDone: e.target.checked });
  };

  isModChange = (e) => {
    e.preventDefault();
    this.setState({ repairIsMod: e.target.checked });
  };

  updateRepair = (e) => {
    e.preventDefault();
    const { repairId } = this.props.match.params;
    const { motorcycleId } = this.props.match.params;
    const {
      repairName,
      repairComments,
      repairMileage,
      repairIsDone,
      repairIsMod,
    } = this.state;

    const updatedRepair = {
      name: repairName,
      comments: repairComments,
      mileage: repairMileage,
      isDone: repairIsDone,
      isMod: repairIsMod,
      repairId,
      motorcycleId,
    };
    repairsData
      .putRepair(repairId, updatedRepair)
      .then(() => {
        if (repairIsMod) {
          this.props.history.push(`/motorcycles/${motorcycleId}/mods`);
        } else {
          this.props.history.push(`/motorcycles/${motorcycleId}/repairs`);
        }
      })
      .catch((err) => console.error('unable to save repair:', err));
  };

  render() {
    const {
      repairName,
      repairComments,
      repairMileage,
      repairIsDone,
      repairIsMod,
    } = this.state;

    return (
      <div className='EditRepair col-12'>
        <h1 className='editRepairFormName mt-5 mb-5'>Edit Form</h1>
        <Link className="backBtn" onClick={() => this.props.history.goBack()}><i class="fas fa-times fa-2x"></i></Link>
        <form className='col-6 offset-3'>
          <div className='form-group'>
            <label htmlFor='repair-name'>Name</label>
            <input
              type='text'
              className='form-control'
              id='repair-name'
              value={repairName}
              onChange={this.nameChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='repair-comments'>Comments</label>
            <input
              type='text'
              className='form-control'
              id='repair-comments'
              value={repairComments}
              onChange={this.commentChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='repair-mileage'>Mileage</label>
            <input
              type='number'
              className='form-control'
              id='repair-mileage'
              value={repairMileage}
              onChange={this.mileageChange}
            />
          </div>
          <div className='d-flex flex-wrap justify-content-around'>
            <div className='form-group form-check'>
              <input
                type='checkbox'
                className='form-check-input mt-3'
                id='repair-isDone'
                value={repairIsDone}
                checked={repairIsDone}
                onChange={this.isDoneChange}
              />
              <label className='form-check-label' htmlFor='repair-isDone'>
                Done
              </label>
            </div>
            <div className='form-group form-check'>
              <input
                type='checkbox'
                className='form-check-input mt-3'
                id='repair-isMod'
                value={repairIsMod}
                checked={repairIsMod}
                onChange={this.isModChange}
              />
              <label className='form-check-label' htmlFor='repair-isMod'>
                Mod
              </label>
            </div>
          </div>
          <button
            className='btn updateRepairBtn mt-3'
            onClick={this.updateRepair}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditRepair;
