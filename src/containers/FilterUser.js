import React from 'react'
import { connect } from 'react-redux'
import { textChange } from '../actions'

let FilterUser = ({ dispatch }) => {

  return (
    <div>
    <input
      type="text"
      name="userText"
      placeholder="Search..."
      onChange={(event) => { dispatch(textChange( event )) }}
     />
    </div>
  )
}

FilterUser = connect()(FilterUser)

export default FilterUser
