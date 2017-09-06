import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class SearchHeader extends Component {
  state = {
    searchCriterion: 'director',
    searchValue: ''
  }

  search = () => {
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
      <div className="SearchHeader">
        <Form>
          <ControlLabel>FIND YOUR MOVIE</ControlLabel>
          <FormControl
            type="text"
            placeholder="Quentin Tarantino"
            onChange={event => 
              this.setState({
                searchValue: encodeURIComponent(event.target.value.trim())
              })
            }
          />
          <div className="lowButtons">
            <ControlLabel>SEARCH BY</ControlLabel>
            
            <Button
              onClick={() => this.setState({ searchCriterion: 'title' })}
              bsStyle={(this.state.searchCriterion === 'title') ? 'primary' : 'default'}
            >TITLE</Button>
            
            <Button
              onClick={() => this.setState({ searchCriterion: 'director' })}
              bsStyle={(this.state.searchCriterion === 'director') ? 'primary' : 'default'}
            >DIRECTOR</Button>
          </div>

          <Button className="searchButton"
            onClick={this.search}
          >SEARCH</Button>
        
        </Form>
      </div>
    )
   }
}

SearchHeader.propTypes = {

}

export default SearchHeader