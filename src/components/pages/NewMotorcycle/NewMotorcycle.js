import React from 'react';

import authData from '../../../helpers/data/authData';
import motorcyclesData from '../../../helpers/data/motorcyclesData';

import './NewMotorcycle.scss';

class NewMotorcycle extends React.Component {
  state = {
    motorcycleName: '',
    motorcycleImageUrl: '',
    motorcycleMileage: 0,
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ motorcycleName: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ motorcycleImageUrl: e.target.value });
  }

  mileageChange = (e) => {
    e.preventDefault();
    this.setState({ motorcycleMileage: e.target.value });
  }

  saveMotorcycle = (e) => {
    e.preventDefault();
    const {
      motorcycleName,
      motorcycleImageUrl,
      motorcycleMileage,
    } = this.state;
    const newMotorcycle = {
      name: motorcycleName,
      imageUrl: motorcycleImageUrl,
      mileage: motorcycleMileage,
      uid: authData.getUid(),
    };
    motorcyclesData.postMotorcycle(newMotorcycle)
      .then(() => this.props.history.push('/motorcycles'))
      .catch((err) => console.error('unable to save motorcycle:', err));
  }

  render() {
    const {
      motorcycleName,
      motorcycleImageUrl,
      motorcycleMileage,
    } = this.state;

    return (
      <div className="NewMotorcycle col-12">
        <h1 className="formName mt-5 mb-5">Add Motorcycle Form</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="motorcycle-name">Name</label>
            <input
             type="text"
             className="form-control"
             id="motorcycle-name"
             value={motorcycleName}
             onChange={this.nameChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="motorcycle-imageUrl">Image Url</label>
            <input
             type="text"
             className="form-control"
             id="motorcycle-imageUrl"
             value={motorcycleImageUrl}
             onChange={this.imageUrlChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="motorcycle-mileage">Mileage</label>
            <input
             type="number"
             className="form-control"
             id="motorcycle-mileage"
             value={motorcycleMileage}
             onChange={this.mileageChange}
             />
          </div>
          <button className="btn saveBtn mt-3" onClick={this.saveMotorcycle}>Save</button>
        </form>
      </div>
    );
  }
}

export default NewMotorcycle;
