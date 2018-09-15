import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends Component {

  componentDidMount() {
    const { contractInfo, loadTodo } = this.props
    fetchTodos(contractInfo, loadTodo)
  }

  render() {
    const { todos, contractInfo, toggleTodo } = this.props
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo, contractInfo)}
          />
        )}
      </ul>
    )
  }
}

const fetchTodos = async (contractInfo, loadTodo) => {

  const { contract, accounts } = contractInfo

  // Get total todo to retrive todo each by each
  const todoLength = await contract.methods.getTotalTodo().call({ from: accounts[0] })

  // Retrive todos
  for(let i = 0; i < todoLength; i++) {
    const todo = await contract.methods.getTodoByIndex(i).call({ from: accounts[0] })
    loadTodo(todo[1], todo[2])
  }

}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    txt: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
