import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: firebaseApp.auth().currentUser,
      database: null
    } 
  }



    return (
      <div>
        <h1>{this.state.user ? this.state.greeting : 'Please log in'}</h1>
        <h2>Log In</h2>
        <form onSubmit={this.loginHandler}>
          <input type='email' name='email' />
          <input type='password' name='password' />
          <input type='submit' />
        </form>
        <button onClick={this.logOut}>Sign Out</button>
        <button onClick={this.googleHandler}>Sign in with Google</button>
        <h2>Sign Up</h2>
        <form onSubmit={this.signupHandler}>
          <input type='email' name='email' />
          <input type='password' name='password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default App;
