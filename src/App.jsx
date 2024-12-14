import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routing'; // Import the centralized routing component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
