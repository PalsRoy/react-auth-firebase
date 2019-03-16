import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Firebase from 'firebase';
import firebaseconfig from '../../config';
import Form from '../Form/Form';

Firebase.initializeApp(firebaseconfig);

class App extends Component {

  constructor(props){
    super(props);
    this.state ={ user : null };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount(){
    Firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleSignIn(){
    const provider = new Firebase.auth.GoogleAuthProvider();
    Firebase.auth().signInWithPopup(provider);

  }

  handleSignOut(){
    Firebase.auth().signOut();
  }
 
  render() {
  
    return (
      <div className="app">
        <div className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
          <h2>REACT CHAT APP</h2>
          { !this.state.user ? (         
          <button  className="app__button" onClick={this.handleSignIn}>SIGN IN</button>             
           ) : (         
          <button  className="app__button" onClick={this.handleSignOut}>SIGN OUT</button>       
        )}
        <div className="app__list">
          <Form user={this.state.user}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
