import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { rootReducer } from './redux/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

let store = createStore(rootReducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
