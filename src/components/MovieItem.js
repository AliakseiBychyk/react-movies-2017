import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

class MovieItem extends Component {

  render() {
    return (
      <div className="MovieItem">
        <div className="backToSearchButton">
          <Button>SEARCH</Button>  
        </div>
        <div className="movieDetails">
          <img
            src={this.props.poster}
            alt={this.props.show_title}
            className="movieItemImg"
          />
          <div>
            <div>
              <p3>{this.props.show_title}</p3>
              <div>{this.props.rating}</div>
            </div>
            <div>
              <div>{this.props.release_year}</div>
              <div>{this.props.runtime}</div>
            </div>
            <div className="movieSummary">
              {this.props.summary}  
            </div>
            <div className="smallFont">
              Director: {this.props.director}  
            </div>
            <div className="smallFont">
              Cast: {this.props.show_cast}  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

MovieItem.propTypes = {
  // unit: PropTypes.number.isRequired,
  // show_id: PropTypes.number.isRequired,
  // show_title: PropTypes.string.isRequired,
  // release_year: PropTypes.string.isRequired,
  // rating: PropTypes.string,
  // category: PropTypes.string,
  // show_cast: PropTypes.string.isRequired,
  // director: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  // poster: PropTypes.string.isRequired,
  // mediatype: PropTypes.number,
  // runtime: PropTypes.string.isRequired
}


export default MovieItem