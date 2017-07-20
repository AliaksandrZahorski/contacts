import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = (users) => {
  return users;
}

const mapDispatchToProps = {
}

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default VisibleUserList
