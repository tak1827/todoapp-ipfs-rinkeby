const contractInfo = (state = [], action) => {
  const { web3, accounts, contract } = action
  switch (action.type) {
    case 'SET_CONTRACT_INFO':
      return  {
        web3,
        accounts,
        contract
      }
    default:
      return state
  }
}

export default contractInfo
