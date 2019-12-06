import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Logo from './components/Logo';
import Home from './containers/Home';


export default class App extends Component {
  
  render() {
    return (
      <div>
        <Logo/>
        <Switch>
          <Route exact path="/" render={(routeProps) => <Redirect to="/home" />} />
          <Route exact path="/home" render={(routeProps) => {
            return (
              <Home/>
            )
          }} />
        </Switch>
      </div>
    );
  }
}

