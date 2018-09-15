import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div style={{ paddingBottom: '24px' }}>
    <FilterLink filter={VisibilityFilters.SHOW_ALL} id="show-all">
      Show All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} id="show-active">
      Show Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} id="show-completed">
      Show Completed
    </FilterLink>
  </div>
)

export default Footer
