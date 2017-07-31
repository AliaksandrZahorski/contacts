import React from 'react'
import { connect } from 'react-redux'
import { deleteUser, editUser } from '../actions'

let FullUser = ({id, text, additionalText, dispatch }) => (
  <div>
    <p className="currentUser name">Name: {text}</p>
    <p className="currentUser data">Data: {additionalText}</p>
      <button className="delete" onClick={() => dispatch(deleteUser( id ))}>
        deleteUser
      </button>
      <button onClick={() => dispatch(editUser( id ))}>
        editUser
      </button>
  </div>
)

FullUser = connect()(FullUser)

export default FullUser
