import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, id, children, onClick }) => (
  <div style={{ float: 'left' }}>
    <input type="radio" name="visibility" id={id} value="all" checked={active ? "checked" : false} onChange={()=>{}}/>
    <label htmlFor={id} style={{ marginRight: '32px'}} onClick={onClick}>{children}</label>
  </div>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
