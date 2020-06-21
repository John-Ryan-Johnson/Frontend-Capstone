import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import EditMotorcycle from '../components/pages/EditMotorcycle/EditMotorcycle';
import Motorcycles from '../components/pages/Motorcycles/Motorcycles';
import NewMotorcycle from '../components/pages/NewMotorcycle/NewMotorcycle';
import SingleMotorcycle from '../components/pages/SingleMotorcycle/SingleMotorcycle';
import Repairs from '../components/pages/Repairs/Repairs';
import EditRepair from '../components/pages/EditRepair/EditRepair';
import NewRepair from '../components/pages/NewRepair/NewRepair';
import SingleRepair from '../components/pages/SingleRepair/SingleRepair';
import Mods from '../components/pages/Mods/Mods';
import SingleMod from '../components/pages/SingleMod/SingleMod';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/motorcycles', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed}/>
            <div className="container">
              <div className="row justify-content-center">
                <Switch>
                  <PrivateRoute path='/motorcycles/edit/:motorcycleId' component={EditMotorcycle} authed={authed} />
                  <PrivateRoute path='/motorcycles/motorcycles/:motorcycleId' component={SingleMotorcycle} authed={authed} />
                  <PrivateRoute path='/motorcycles/new' component={NewMotorcycle} authed={authed} />
                  <PrivateRoute path='/motorcycles' component={Motorcycles} authed={authed} />
                  <PrivateRoute path='/repairs/edit/:repairId' component={EditRepair} authed={authed}/>
                  <PrivateRoute path='/repairs/new' component={NewRepair} authed={authed}/>
                  <PrivateRoute path='/repairs/:repairId' component={SingleRepair} authed={authed}/>
                  <PrivateRoute path='/repairs' component={Repairs} authed={authed}/>
                  <PrivateRoute path='/mods/:repairId' component={SingleMod} authed={authed}/>
                  <PrivateRoute path='/mods' component={Mods} authed={authed}/>
                  <PublicRoute path='/auth' component={Auth} authed={authed} />
                  <Redirect from="*" to="/motorcycles"/>
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
