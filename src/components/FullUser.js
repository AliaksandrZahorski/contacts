import React from 'react'
import { connect } from 'react-redux'
import { deleteUser, editUser } from '../actions'

let FullUser = ({id, text, additionalText, dispatch }) => (
  <div>
    <p>Name: {text}</p>
    <p>Data: {additionalText}</p>
      <button onClick={() => dispatch(deleteUser( id ))}>
        deleteUser
      </button>
      <button onClick={() => dispatch(editUser( id ))}>
        editUser
      </button>
  </div>
)

FullUser = connect()(FullUser)

export default FullUser
