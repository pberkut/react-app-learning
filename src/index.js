import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import reportWebVitals from './reportWebVitals';

// My Apps
// import App from './components/App';

// TodoReduxApp
import { Provider } from 'react-redux';
// import App from './apps/TodoReduxApp';
// import { store } from './apps/TodoReduxApp/redux/store';
import App from './apps/TodoReduxToolkitApp';
import { store } from './apps/TodoReduxToolkitApp/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/react-app-learning"> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
