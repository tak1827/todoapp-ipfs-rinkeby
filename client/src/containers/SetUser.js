import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = state => ({
	email: state.user.email,
	picture: state.user.picture
})

export default connect(
  mapStateToProps
)(Header)
