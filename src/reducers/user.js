const user = (state = [], action) => {
  const { id, name, email, picture } = action
  switch (action.type) {
    case 'SET_USER_INFO':
      return  {
        id,
        name,
        email,
        picture
      }
    default:
      return state
  }
}

export default user
