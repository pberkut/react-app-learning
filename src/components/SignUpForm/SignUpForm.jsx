import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const SignUpForm = () => {
  const [login, setLogin] = useLocalStorage('login', '');
  const [password, setPassword] = useLocalStorage('password', '');
  // const [login, setLogin] = useState(() => {
  //   console.log('Вызывается один раз');
  //   return JSON.parse(window.localStorage.getItem('login')) ?? '';
  // });

  // const [password, setPassword] = useState(
  //   () => JSON.parse(window.localStorage.getItem('password')) ?? ''
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('login', JSON.stringify(login));
  // }, [login]);

  // useEffect(() => {
  //   window.localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'login':
        setLogin(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  // const handleLoginChange = event => {
  //   setLogin(event.target.value);
  // };
  // const handlePasswordChange = event => {
  //   setPassword(event.target.value);
  // };

  return (
    <form>
      <label>
        Login
        <input type="text" name="login" value={login} onChange={handleChange} />
      </label>
      <label>
        Password
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
