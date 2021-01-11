import React from 'react';
import { Route } from 'react-router-dom'
import Homepage from './views/homepage/Homepage';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Route path="/" component={Homepage} />
    </div>
  );
}

export default App;
