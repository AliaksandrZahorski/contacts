import React from 'react'
import { connect } from 'react-redux'
import { filterUser, textChange } from '../actions'

let FilterUser = ({ dispatch }) => {

  return (
    <div>
    <input type="text" name="userText" onChange={(event) => { dispatch(textChange( event )) }} />
    <button onClick={() => dispatch(filterUser())}>
      filterUser
    </button>
    </div>
  )
}

FilterUser = connect()(FilterUser)

export default FilterUser
