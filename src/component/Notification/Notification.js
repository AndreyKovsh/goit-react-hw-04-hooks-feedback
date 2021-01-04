import PT from 'prop-types';
import './Notification.css';

const Notification = ({ message }) => {
  return <p className="msg">{message}</p>;
};

Notification.propTypes = {
  message: PT.string.isRequired,
};

export default Notification;
