const sendFile = async (body: any): Promise<any> => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${process.env.API_URL}/api/transactions`, requestOptions);
  return response.json();
};

export const TransactionsService = {
  sendFile,
};
