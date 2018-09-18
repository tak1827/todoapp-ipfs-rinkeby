import showToast from './showToast'

const sendTransaction = async (transaction, from) => {

  const gas = await transaction.estimateGas({ from })

  console.log("Estimaged Gas:" + gas)

  let options = {
    from,
    data: transaction.encodeABI(),
    gas,
    gasPrice: 10000000000
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
