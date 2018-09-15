import { connect } from 'react-redux'
import { addTodo } from '../actions'
import sendTransaction from '../utils/sendTransaction'
import showToast from '../utils/showToast'
import AddTodoForm from '../components/AddTodoForm'

const addTodoToEther = async (dispatch, nextIndex, txt, contractInfo) => {

  const { contract, accounts } = contractInfo

  try {

    const transaction = contract.methods.createrTodo(nextIndex, txt)
    const receipt = await sendTransaction(transaction, accounts[0])

    if (!receipt.status) return console.log(receipt)

    console.log(receipt.events.TodoCreated.returnValues)

    await showToast('Todo Add!', 2000)

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
