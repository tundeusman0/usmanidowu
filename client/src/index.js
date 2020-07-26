import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configStore';
import './styles/base/base.css';
import './styles/components/form.css';
import './styles/components/modal.css';
import './styles/components/table.css';
import './styles/components/port.css';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Dashboard />
      </div>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
