import React, { Component } from 'react';
import hogs from '../porkers_data';
import HogDetails from './HogDetails';
import UUID from 'uuid'


class HogIndex extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedHog: ""
    }
  }

  buildHogCards = () => {
    return hogs.map(hog => {
      let cleanHogName = hog.name.replace(/ /g, "_").toLowerCase()
      let graphImage = require('../hog-imgs/' + cleanHogName + '.jpg')
      return (

        <div key={UUID()} className="ui eight wide column" >
          <h3 data-selectedhogname={hog.name}>{hog.name}</h3>
          <img src={graphImage} data-selectedhogname={hog.name} alt={hog.name} />
        </div>)

    })
  }

  handleClick = (event) => {
    this.setState({
      selectedHog: event.target.dataset.selectedhogname,
    })
  }

  render() {
    return (
      <div>
        <div className="ui grid container" onClick={this.handleClick}>
          {this.buildHogCards()}
        </div>
        <HogDetails selectedHog={this.state.selectedHog}/>
      </div>
    )
  }
}

export default HogIndex;
