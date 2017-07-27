import React from 'react'
import { connect } from 'react-redux'
import { saveUser } from '../actions'

let EditUser = ({isEdit, currentUserId, dispatch }) => {
  let inputName, inputData
  console.log('From EditUser, isEdit= '+ isEdit );

    if( isEdit) {
      return(
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
    )
    }

    return <div> zzz </div>;

}

EditUser = connect()(EditUser)

export default EditUser
