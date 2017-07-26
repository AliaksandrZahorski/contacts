import React from 'react'
import AddUser from '../containers/AddUser'
import FilterUser from '../containers/FilterUser'
import VisibleUserList from '../containers/VisibleUserList'
import CurrentUser from './CurrentUser'

const App = () => (
  <div>
    <AddUser />
    <FilterUser />
    <VisibleUserList />
    <CurrentUser />
  </div>
)

export default App
