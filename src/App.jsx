import './App.css';
import users from './data/users.json';

const user = users[0];

export default function App() {
  return (
    <>
      <UserProfile
        name={user.name}
        username={user.username}
        email={user.email}
      />
    </>
  );
}

const UserProfile = props => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Username: {props.username}</h2>
      <p>Email: {props.email}</p>
      <button>Click me</button>
    </>
  );
};
