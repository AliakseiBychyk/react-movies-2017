import React from 'react'
import PropTypes from 'prop-types'
import MoviePreview from './MoviePreview'

const MovieList = ({movies, onMovieClick}) => (
  <div className='MovieList'>
    {movies.map((movie, index) =>
      <MoviePreview
        key={movie.unit}
        id={index + 1}
        onClick={onMovieClick}
        {...movie}
      />
    )}
  </div>
)

MovieList.propTypes = {
  movies: PropTypes.array,
  onMovieClick: PropTypes.func
}

export default MovieList
