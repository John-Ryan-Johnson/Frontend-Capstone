import PropTypes from 'prop-types';

const motorcycleShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  mileage: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { motorcycleShape };
