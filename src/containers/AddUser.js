import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

let AddUser = ({ dispatch }) => {
  let inputName, inputData

  return (
    <div>
    <form onSubmit={e => {
      e.preventDefault()
      if (!inputName.value.trim()) {
        return
      }
      dispatch(addUser(inputName.value, inputData.value))
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
        Add User
      </button>
    </form>
    </div>
  )
}
AddUser = connect()(AddUser)

export default AddUser
