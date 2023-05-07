const sendFile = async (body: File): Promise<any> => {
  let data = new FormData();
  data.append('file', body);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  };

  const response = await fetch(`${process.env.API_URL}/api/transactions`, requestOptions);
  return response;
};

export const TransactionsService = {
  sendFile,
};
