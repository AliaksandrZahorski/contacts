import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = ( users ) => {

  if ( users.users.system.text.length > 0 ) {
    let result = users.users.data.filter((item) => item.text.startsWith(users.users.system.text));
    return {
      users: {
        data: result
        }
      }
    }

  return users;
}

const mapDispatchToProps = {
}

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default VisibleUserList
