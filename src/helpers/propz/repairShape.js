import PropTypes from 'prop-types';

const repairShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  isMod: PropTypes.bool.isRequired,
  mileage: PropTypes.number.isRequired,
  motorcycleId: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { repairShape };
