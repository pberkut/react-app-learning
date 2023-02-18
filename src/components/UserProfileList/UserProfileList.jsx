import PropTypes from 'prop-types';
import UserProfile from '../UserProfile/UserProfile';

export default function UserProfileList({ items }) {
  return (
    <ul>
      {items.map(({ id, name, username, email }) => (
        <li key={id}>
          <UserProfile name={name} username={username} email={email} />
        </li>
      ))}
    </ul>
  );
}

UserProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
