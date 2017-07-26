import React from 'react'
import User from './User'

const UserList = ({ users }) => (
  <div className="userlist">
  <ul>
    {users.data.map(user =>
      <User
        key={user.id}
        {...user}
      />
    )}
  </ul>
  </div>
)



export default UserList
