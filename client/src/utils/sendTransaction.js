const sendTransaction = async (transaction, from) => {

  let options = {
    from,
    data: transaction.encodeABI(),
    gas: await transaction.estimateGas({ from })
  };

  const receipt = await transaction.send(options)

  return receipt;
}

export default sendTransaction
