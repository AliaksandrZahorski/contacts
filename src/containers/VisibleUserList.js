import { connect } from 'react-redux'
import UserList from '../components/UserList'

const mapStateToProps = (users) => {
  if (users.users.system.text.length > 0) {
    console.log(users.users);
    console.log(users.users.data.filter((item) => item.text.startsWith(users.users.system.text)))
    // return {
    //   ...users,
    //   data: [...users.users.data,
    //     users.users.data.filter((item) => item.text.startsWith(users.users.system.text))
    //   ]
    let result = users.users.data.filter((item) => item.text.startsWith(users.users.system.text));
    return {
      users: {
        data: result
        }
      }
    }

    // }

  return users;
}

const mapDispatchToProps = {
}

const VisibleUserList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)



export default VisibleUserList
