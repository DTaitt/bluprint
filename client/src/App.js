import React, { Component } from 'react';
import './App.css';

//Importing React Router 
import {
  BrowserRouter as Router,
  Route,
 
} from 'react-router-dom'

//import components
import Header from './components/Header.jsx';
import Index from './components/pages/Index.jsx';
import BootcampsPage from './components/pages/BootcampsPage.jsx';
import LocationsPage from './components/pages/LocationsPage.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={ Index } />
          <Route exact path="/bootcamps/:career" component={ BootcampsPage } />
          <Route exact path="/locations/:place" component={ LocationsPage } />
        </div>
      </Router>
    );
  }
}

export default App;
