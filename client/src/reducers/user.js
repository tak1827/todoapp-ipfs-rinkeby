const user = (state = [], action) => {
  const { id, email, picture } = action
  switch (action.type) {
    case 'SET_USER_INFO':
      return  {
        id,
        email,
        picture
      }
    default:
      return state
  }
}

export default user
