import React from 'react';
import navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
      </Navbar>
      <Switch>
      <route path='/' exact />
      </Switch>
      </Router>
    </>
  );
}

export default App;
