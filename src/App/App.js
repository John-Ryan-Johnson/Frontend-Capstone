import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import EditMotorcycle from '../components/pages/EditMotorcycle/EditMotorcycle';
import Motorcycle from '../components/pages/Motorcycle/Motorcycle';
import NewMotorcycle from '../components/pages/NewMotorcycle/NewMotorcycle';
import SingleMotorcycle from '../components/pages/SingleMotorcycle/SingleMotorcycle';

import fbConnection from '../helpers/data/connection';

fbConnection();

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
    return (
      <div className="App">
        <MyNavbar />
        <h1>MotoWorx</h1>
        <Auth />
        <EditMotorcycle/>
        <Motorcycle/>
        <NewMotorcycle/>
        <SingleMotorcycle/>
      </div>
    );
  }
}

export default App;
