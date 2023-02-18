import PropTypes from 'prop-types';

const UserProfile = ({ name, username = 'Anonymuos', email }) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Username: {username}</h2>
      <p>Email: {email}</p>
      <button>Click me</button>
    </>
  );
};

UserProfile.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserProfile;
