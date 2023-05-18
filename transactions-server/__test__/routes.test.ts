import axios from 'axios';

const url = 'http://localhost:4000';
const baseAPIUrl = `${url}/api`;

describe('API Routes', () => {
  describe("Given access to the root route, '/' ", () => {
    test('Then I expect to see a message and get a status of 200', async () => {
      const res = await axios.get(url);
  
      expect(res).toBeTruthy();
      expect(res.status).toBe(200);
      expect(res.data).toEqual('hello there');
    })
  });
  
  describe("Given access to the balance route, '/api/balance' ", () => {
    test('Then I expect to receive the current total balance, GET', async () => {
      const res = await axios.get(`${baseAPIUrl}/balance`);
  
      expect(res).toBeTruthy();
      expect(res.status).toBe(200);
      expect(res.data).toEqual(
        expect.objectContaining({
          totalProducer: expect.any(Number),
          totalAffiliate: expect.any(Number),
          comissionToPay: expect.any(Number),
        })
      );
    });
  });

  describe("Given access to the transactions route, 'api/transactions' ", () => {
    test('Then I expect to receive the current collection of transactions, GET', async () => {
      const res = await axios.get(`${baseAPIUrl}/transactions`);

      expect(res).toBeTruthy();
      expect(res.status).toBe(200);
      expect(res.data).toBeDefined();
      const mockData = res.data.map(() => {
        return {
          id: expect.any(String),
          type: expect.any(Number),
          date: expect.any(String),
          value: expect.any(Number),
          vendor: expect.any(String),
          product: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }
      });
      expect(res.data).toEqual(mockData);
    });
  })
});
