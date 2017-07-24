import React from 'react'
import AddUser from '../containers/AddUser'
import FilterUser from '../containers/FilterUser'
import VisibleUserList from '../containers/VisibleUserList'

const App = () => (
  <div>
    <AddUser />
    <VisibleUserList />
    <FilterUser />
  </div>
)

export default App
