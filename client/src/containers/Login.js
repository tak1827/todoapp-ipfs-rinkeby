import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state, ownProps) => ({
  accounts: state.contractInfo.accounts,
  contract: state.contractInfo.contract,
})

export default connect(mapStateToProps)(LoginForm)
