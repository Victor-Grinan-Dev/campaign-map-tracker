import React from 'react';
import './index.css';
import App from './App';
import store from "./app/store";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider';

const root = createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>

);



