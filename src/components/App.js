import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const result = JSON.stringify(this.props.user)
    return <div> { result } </div>
  }
}

function mapStateToProps (state) {
  return {
    user: state.users.byHash
  }
}

export default connect(mapStateToProps)(App)
