import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <form className="col s12">
      <p>Please input your todo</p>
      <div className="row">
        <div className="input-field col s11">
          <input id="new-todo" type="text" ref={node => input = node}/>
        </div>
        <div className="col s1">
          <a id="add-btn" className="btn-floating btn-large waves-effect waves-light" 
            onClick={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              dispatch(addTodo(input.value))
              input.value = ''
            }}>
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    </form>
  )
}

export default connect()(AddTodo)
