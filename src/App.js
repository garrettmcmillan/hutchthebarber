import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import Home from './components/Home';


/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/services" component={Services} />
        </Switch>
    </React.Fragment>
  );
}

export default App;