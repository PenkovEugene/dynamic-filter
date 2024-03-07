import React from 'react';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { store } from "../store/store.js"
import App  from "../components/App/App.jsx";

const HomePage: NextPage = () => {
  
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default HomePage;