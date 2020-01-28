import React from 'react';
import './App.css';
import {
  Route
} from "react-router-dom";
import { Home, About, Contact, Navigation } from './components';

const App = () => {
  return (
    <div className='app'>
      <div>
        <Navigation />
      </div>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/about"
        component={About}
      />
      <Route
        path="/contact"
        component={Contact}
      />
    </div>
  );
};

export default App;
