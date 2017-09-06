import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchHeader from './SearchHeader'
import MovieList from './MovieList'
import '../styles/index.css'

class App extends Component {
  state = {
    movies: [],
    searchCriterion: 'director',
    searchValue: ''
  }

  fetchMovies = () => {
    let { searchCriterion, searchValue } = this.state
    const url = `http://netflixroulette.net/api/api.php?${searchCriterion}=${searchValue}`
    console.log('state on search: ', this.state, ' ,url: ', url)

    fetch(url, {
      method: 'GET',
    }).then(resp => resp.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <SearchHeader />
        <MovieList
          onMovieClick  
          movies={this.state.movies}
        />
      </div>
    )
  }
}

App.propTypes = {

}

export default App