import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';
import authLogo from '../../../images/MotoWorx-auth.png';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <img src={authLogo} className="login mt-5" onClick={this.loginClickEvent} alt="Google Login"/>
      </div>
    );
  }
}

export default Auth;
