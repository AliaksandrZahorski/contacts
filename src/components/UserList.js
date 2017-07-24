import React from 'react'
import User from './User'

const UserList = ({ users }) => (
  <ul>
    {users.data.map(user =>
      <User
        key={user.id}
        {...user}
      />
    )}
  </ul>
)



export default UserList
