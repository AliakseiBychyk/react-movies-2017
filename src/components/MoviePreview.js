import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MoviePreview extends Component {

  handleClick = () => {
    console.log(this.props.show_title)
    this.props.onClick(this.props.unit)
  }

  render() {
    return (
      <div
        className="MoviePreview"
        onClick={this.handleClick}
      >
        <img
          src={this.props.poster}
          alt={this.props.show_title}
          className="moviePreviewImg" />  
      </div>
    )
  }
}

MoviePreview.propTypes = {
  unit: PropTypes.number.isRequired,
  show_title: PropTypes.string.isRequired,
  director: PropTypes.string,
  poster: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default MoviePreview