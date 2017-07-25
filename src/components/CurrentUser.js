import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = ( users ) => {
  let result = users.users.data.filter((item) => item.id === users.users.system.currentUserId);
  return {
    users: {
      data: result
      }
   }
}

const mapDispatchToProps = {
}

const CurrentUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default CurrentUser
