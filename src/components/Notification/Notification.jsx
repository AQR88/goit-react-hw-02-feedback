import css from './notification.module.css';

const Notification = ({ message }) => {
  return <h4 className={css.message}>{message}</h4>;
};
export default Notification;
