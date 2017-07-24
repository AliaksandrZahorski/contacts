import React from 'react'
import PropTypes from 'prop-types'

const User = ({ text }) => (
  <li>
    {text}
  </li>
)

User.propTypes = {
  text: PropTypes.string.isRequired
}

export default User
