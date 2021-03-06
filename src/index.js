/* eslint-disable no-unused-vars */
//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import Contact from './contact';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contact" exact component={Contact}/>
      </Switch>
    </Router>
  )
}

export default App;

  
  ReactDOM.render(<App />, document.querySelector("#root"));
  