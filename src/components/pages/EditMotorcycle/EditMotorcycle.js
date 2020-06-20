import React from 'react';
import './EditMotorcycle.scss';

class EditMotorcycle extends React.Component {
  render() {
    const editId = this.props.match.params.motorcycleId;
    return (
      <div className="EditMotorcycle">
        <h1>Edit Motorcycle</h1>
        <h2>The Motorcycle id is {editId}</h2>
      </div>
    );
  }
}

export default EditMotorcycle;
