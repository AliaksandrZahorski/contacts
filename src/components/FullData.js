import React from 'react'
import FullUser from './FullUser'

let FullData = ({ users }) => (
  <div className="userdata">
    {users.data.map(user =>
      <FullUser
        key={user.id}
        {...user}
      />
    )}
  </div>
)

export default FullData
