import React from 'react';
import './App.css';
import User from './components/User'

class App extends React.Component {
  state = {
    userA: {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      lastName: "Hello",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    }
  };

  render() {
    // ...
    return (
      <div className="App">
        <User firstName={this.state.userA.firstName} />
        <User firstName={this.state.userB.firstName} />

        {/* ... */}
      </div>
    );
  }
}

export default App;