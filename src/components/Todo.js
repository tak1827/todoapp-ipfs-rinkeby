import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li className="collection-item">
    <input type="checkbox" checked={completed ? "checked" : false} onChange={()=>{}}/>
    <label htmlFor="todo0" onClick={onClick}>{text}</label>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
