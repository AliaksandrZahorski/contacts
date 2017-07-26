import { connect } from 'react-redux'
import FullData from '../components/FullData'

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
)(FullData)

export default CurrentUser
