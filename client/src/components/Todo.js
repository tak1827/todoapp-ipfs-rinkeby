import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, txt }) => (
  <li className="collection-item">
    <input type="checkbox" checked={completed ? "checked" : false} onChange={()=>{}}/>
    <label htmlFor="todo0" onClick={onClick}>{txt}</label>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  txt: PropTypes.string.isRequired
}

export default Todo
