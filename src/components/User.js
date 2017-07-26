import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from '../actions'

let User = ({ text, id, dispatch }) => (
  <li onClick={() => dispatch( currentUser( id ))}>
    {text}
  </li>
)

User = connect()(User)

export default User
