import React, { Component } from "react";
import ImprovedCard from './ImprovedCard';

class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola" },
        { title: "Star Wars", director: "Rian Johnson" },
        { title: "The Shawshank Redemption", director: "Frank Darabont" },
      ],
    };
  }
  deleteMovieHandler = (movieIndex) => {
      //usamos spread operator para hacer una copia del state.
    const moviesCopy = [...this.state.movies]; // <== notice the spread operator here!
    moviesCopy.splice(movieIndex, 1);
    //sustituimos el state.
    this.setState({
        movies: moviesCopy
    })
  }
  
  render() {
    console.log(this.state.movies)
    return (
      <div>
        {
            this.state.movies.map((oneMovie, index) => {
                //esto es lo mismo pero usando bind .
              // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
              return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
          })
        }
      </div>
    );
  }
}
export default DynamicMoviesList;
