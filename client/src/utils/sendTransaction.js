import showToast from './showToast'

const sendTransaction = async (transaction, from) => {

  let options = {
    from,
    data: transaction.encodeABI(),
    gas: await transaction.estimateGas({ from })
  };

  const receipt = await transaction.send(options)

  console.log(receipt)

  if (!receipt.blockHash) {
  	showToast('Transaction Failed', 2000, 'fail')
  	return false
  }

  return true;
}

export default sendTransaction
