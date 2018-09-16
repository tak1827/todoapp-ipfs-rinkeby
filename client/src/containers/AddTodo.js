import { connect } from 'react-redux'
import { addTodo } from '../actions'
import sendTransaction from '../utils/sendTransaction'
import showToast from '../utils/showToast'
import AddTodoForm from '../components/AddTodoForm'

const addTodoToEther = async (dispatch, nextIndex, txt, contractInfo) => {

  const toastInstance = await showToast('Transaction processing ...', 60*60*1000, 'info', false, true)

  const { contract, accounts } = contractInfo

  try {

    const transaction = contract.methods.createrTodo(nextIndex, txt)
    const status = await sendTransaction(transaction, accounts[0])

    toastInstance.dismiss()

    if (!status) return

    await showToast('Todo Add!', 2000, 'success')

    dispatch(addTodo(txt, false))

  } catch (e) { console.log(e); }
}

const mapStateToProps = (state, ownProps) => ({
  nextIndex: state.todos.length,
  contractInfo: state.contractInfo,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTodoClick: (nextIndex, txt, contractInfo) => { 
    addTodoToEther(dispatch, nextIndex, txt, contractInfo)
  }
})


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddTodoForm)
