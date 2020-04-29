import React from "react";
import "./App.css";
import User from "./components/User";

class App extends React.Component {
  state = {
    userA: {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png",
    },
    userB: {
      firstName: "Ana",
      lastName: "Hello",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png",
    },
    clickCount: 0,
    backColor: "yellow",
  };

  clickHandler = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          lastName={this.state.userA.lastName}
          image={this.state.userA.avatarUrl}
        />
        <User
          firstName={this.state.userB.firstName}
          lastName={this.state.userB.lastName}
          image={this.state.userB.avatarUrl}
        />
      </div>
    );
  }
}


export default App;
