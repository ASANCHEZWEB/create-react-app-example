import React from "react";
import "./App.css";
import DynamicMoviesList from "./components/dynamicListsDemo/DynamicMoviesList";
import TextareaAndSelectTagDemo from './components/dynamicListsDemo/TextareaAndSelectTagDemo';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DynamicMoviesList />
        <TextareaAndSelectTagDemo />
      </div>
    );
  }
}

export default App;
