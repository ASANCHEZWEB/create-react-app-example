import React from "react";
import "./App.css";
import { listItems } from "./components/ListDemo";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default App;
