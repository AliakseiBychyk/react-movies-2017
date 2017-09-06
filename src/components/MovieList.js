import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoviePreview from './MoviePreview'

const MovieList = ({movies}) => (
  <div className="MovieList">
    {movies.map(movie =>
      <MoviePreview
        key={movie.unit}
     
        {...movie}
      />
    )}
  </div>
)


MovieList.propTypes = {
  movies: PropTypes.array,

}

export default MovieList