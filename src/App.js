import React from "react";
import "./App.css";
import DynamicMoviesList from "./components/dynamicListsDemo/DynamicMoviesList";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DynamicMoviesList />
      </div>
    );
  }
}

export default App;
