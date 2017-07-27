import React from 'react'
import { connect } from 'react-redux'
import { saveUser } from '../actions'

let SaveEditedUser = ({ users, currentUserId, isEdit, dispatch }) => (
  <div className="userdata">
     {howToDisplay(isEdit, currentUserId, dispatch)}
  </div>
)

let inputName, inputData

function howToDisplay (isEdit, currentUserId, dispatch) {
  if(isEdit) {
    return (
    <div>
    <form onSubmit={e => {
      e.preventDefault()
      if (!inputName.value.trim()) {
        return
      }
      dispatch(saveUser(currentUserId, inputName.value, inputData.value))
      inputName.value = '';
      inputData.value = '';
    }}>
      <input ref={node => {
        inputName = node
      }}  placeholder="Name"/>
      <input ref={node => {
        inputData = node
      }}  placeholder="Data" />
      <button type="submit">
        Save User
      </button>
    </form>
    </div>
  );
  }
  return null;
}

SaveEditedUser = connect()(SaveEditedUser)

export default SaveEditedUser
