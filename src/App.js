import React from "react";
import "./App.css";
import { MoviesList } from "./components/ListDemo";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <MoviesList />
        </div>
      </div>
    );
  }
}

export default App;
