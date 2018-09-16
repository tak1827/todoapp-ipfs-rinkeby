import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import sendTransaction from '../utils/sendTransaction'
import showToast from '../utils/showToast'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const toggleTodoToEther = async (dispatch, todo, contractInfo) => {

  const toastInstance = await showToast('Transaction processing ...', 60*60*1000, 'info', false, true)

  const { contract, accounts } = contractInfo

  try {

    const transaction = contract.methods.updateTodo(todo.id, todo.txt, !todo.completed)
    const status = await sendTransaction(transaction, accounts[0])

    toastInstance.dismiss()

    if (!status) return

    await showToast('Todo Updated!', 2000, 'success')

    dispatch(toggleTodo(todo.id))
    
  } catch (e) { console.log(e) }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  contractInfo: state.contractInfo,
})

const mapDispatchToProps = dispatch => ({
  loadTodo: (txt, completed) => dispatch(addTodo(txt, completed)),
  toggleTodo: (todo, contractInfo) => toggleTodoToEther(dispatch, todo, contractInfo)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
