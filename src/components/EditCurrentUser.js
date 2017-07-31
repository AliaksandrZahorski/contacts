import { connect } from 'react-redux'
import SaveEditedUser from './SaveEditedUser'

const mapStateToProps = ( users ) => {
  let result = users.users.data.filter((item) => item.id === users.users.system.currentUserId);
  return {
    users: {
      data: result
    },
    currentUserId: users.users.system.currentUserId,
    isEdit: users.users.system.isEdit,
    dispatch: users.dispatch,
    }
}

const mapDispatchToProps = {
}

const EditCurrentUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveEditedUser)

export default EditCurrentUser
