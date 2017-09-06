import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchHeader from './SearchHeader'
import MovieList from './MovieList'
import MovieItem from './MovieItem'
import '../styles/index.css'

class App extends Component {
  state = {
    movies: [],
    searchCriterion: 'director',
    searchValue: '',
    currentMovieId: null
  }

  fetchMovies = () => {
    let { searchCriterion, searchValue } = this.state
    const url = `http://netflixroulette.net/api/api.php?${searchCriterion}=${searchValue}`
    console.log('state on search: ', this.state, ' ,url: ', url)

    fetch(url, {
      method: 'GET'
    }).then(resp => resp.json())
      .then(data => this.setState({
        movies: (this.state.searchCriterion === 'director' && data.length !== 0)
          ? data
          : [data]
      }))
  }

  setMovie = (id) => {
    this.setState({
      currentMovieId: id
    })
  }

  onInputValue = (value) => {
    let updatedValue = encodeURIComponent(value.trim())
    this.setState({
      searchValue: updatedValue
    })
  }

  updateSearchCriterion = (searchBy) => {
    this.setState({
      searchCriterion: searchBy
    })
  }

  headerContent = () => {
    if (this.state.currentMovieId) {
      let currentMovie = this.state.movies[this.state.currentMovieId - 1]
      console.log(this.state.currentMovieId)
      return (
        <MovieItem
          {...currentMovie}
        />
      )
    }
    return (
      <SearchHeader
        onSearchButtonClick={this.fetchMovies}
        onCriterionButtonClick={this.updateSearchCriterion}
        onInputValue={this.onInputValue}
        criterion={this.state.searchCriterion}

      />
    )
  }

  render () {
    return (
      <div className='App'>

        {this.headerContent()}

        <MovieList
          movies={this.state.movies}
          onMovieClick={this.setMovie}
        />
      </div>
    )
  }
}

App.propTypes = {

}

export default App
