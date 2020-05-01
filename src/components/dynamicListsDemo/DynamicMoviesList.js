import React, { Component } from "react";
import ImprovedCard from './ImprovedCard';

class DynamicMoviesList extends Component {
    constructor(){
        super();
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
            ],
            showOscarAwarded: false // <== añadir
        }
    }
    
    toggleMovies = () => {
        this.setState({ showOscarAwarded: !this.state.showOscarAwarded })
    }
    
    deleteMovieHandler = (movieIndex) => {
        const moviesCopy = [...this.filteredMovies];
        moviesCopy.splice(movieIndex, 1);
        this.setState({
            movies: moviesCopy
        })
    }
    //array de pelis filtradas 
    filteredMovies;

    render() {
        //creamos una copia de this.showOscarAwarded variable
        const {showOscarAwarded} = this.state;
        //filtramos por peliculas con oscars pero sin hadwars
        this.filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded);

        return (
            <div>
                {
                    //usamos las peliis filtradas para pintarlas usando el componente ImprovedCard
                    this.filteredMovies.map((oneMovie, index) => {
                        // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
                        return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
                    })
                }            
                {/* Creamos un boton para mostras la lista de los que han ganado oscar y los que no */}
                <button onClick={() => this.toggleMovies() }>
                    {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
                </button>
            </div>
        );
    }
}
export default DynamicMoviesList;
