export const setContractInfo = (web3, accounts, contract) => {
  return {
    type: 'SET_CONTRACT_INFO',
    web3,
    accounts,
    contract
  }
}

export const setUserInfo = (id, email, picture) => {
  return {
    type: 'SET_USER_INFO',
    id,
    email,
    picture
  }
}

let nextTodoId = 0
export const addTodo = (txt, completed) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  txt,
  completed
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

