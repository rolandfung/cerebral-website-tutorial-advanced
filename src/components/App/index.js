import React from 'react';
import {connect} from 'cerebral-view-react';
import Filters from '../Filters'
import Items from '../Items'

export default connect({
  newItemTitle: 'app.newItemTitle',
  error: 'app.error'
},
  class App extends React.Component {
    componentDidMount() {
      this.props.signals.app.mounted()
    }
    onFormSubmit(event) {
      event.preventDefault()
      this.props.signals.app.newItemTitleSubmitted()
    }
    onInputChange(event) {
      this.props.signals.app.newItemTitleChanged({
        title: event.target.value
      })
    }
    render() {
      return (
        <div>
          <Filters />
          <br />
          <form onSubmit={event => this.onFormSubmit(event)}>
            <input
              autoFocus
              value={this.props.newItemTitle}
              onChange={event => this.onInputChange(event)}
            />
            {
              this.props.error ?
                <span style={{color: 'red', paddingLeft: '10px'}}>{this.props.error}</span>
              :
                null
            }
          </form>
          <Items />
        </div>
      );
    }
  }
)
