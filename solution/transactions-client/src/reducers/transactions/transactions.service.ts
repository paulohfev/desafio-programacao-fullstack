const sendFile = async (file: File): Promise<any> => {
  let formData = new FormData();
  formData.append('transactions', file);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  await fetch(`${process.env.REACT_APP_API_URL}/transactions`, requestOptions)
    .then(res => console.log('res', res))
    .catch(err => console.log('error', err));
};

export const TransactionsService = {
  sendFile,
};
