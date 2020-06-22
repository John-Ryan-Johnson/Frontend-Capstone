import React from 'react';

import './EditMotorcycle.scss';

import authData from '../../../helpers/data/authData';
import motorcyclesData from '../../../helpers/data/motorcyclesData';

class EditMotorcycle extends React.Component {
  state = {
    motorcycleName: '',
    motorcycleImageUrl: '',
    motorcycleMileage: 0,
  }

  componentDidMount() {
    const editId = this.props.match.params.motorcycleId;
    motorcyclesData.getSingleMotorcycle(editId)
      .then((response) => {
        const motorcycle = response.data;
        this.setState({
          motorcycleName: motorcycle.name,
          motorcycleImageUrl: motorcycle.imageUrl,
          motorcycleMileage: motorcycle.mileage,
        });
      })
      .catch((err) => console.error('unable to get motorcycle to edit:', err));
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

  updateMotorcycle = (e) => {
    e.preventDefault();
    const { motorcycleId } = this.props.match.params;
    const {
      motorcycleName,
      motorcycleImageUrl,
      motorcycleMileage,
    } = this.state;
    const updatedMotorcycle = {
      name: motorcycleName,
      imageUrl: motorcycleImageUrl,
      mileage: motorcycleMileage,
      uid: authData.getUid(),
    };
    motorcyclesData.putMotorcycle(motorcycleId, updatedMotorcycle)
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
      <div className="EditMotorcycle col-12">
        <h1 className="editFormName mt-5 mb-5">Edit Motorcycle Form</h1>
        <form className="col-6 offset-3 text-center">
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
            type="text"
            className="form-control"
            id="motorcycle-mileage"
            value={motorcycleMileage}
            onChange={this.mileageChange}
            />
          </div>
          <button className="btn updateBtn mt-3" onClick={this.updateMotorcycle}>Save</button>
        </form>
      </div>
    );
  }
}

export default EditMotorcycle;
