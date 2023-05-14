import { uuid } from 'uuidv4';

const SequelizeMock = require('sequelize-mock');

describe('Transactions from database', () => {
  let sequelizeMock;
  let Transaction: any;

  beforeAll(() => {
    sequelizeMock = new SequelizeMock();
    Transaction = sequelizeMock.define('transaction', {
      id: uuid(),
      type: 1,
      date: new Date('2022-01-15T19:20:30-03'),
      product: 'Curso de Bem-estar',
      value: 4300,
      vendor: 'Paulo Evangelista'
    });

    const mockTransactions = [
      {
        type: 1,
        date: new Date('2022-01-15T19:20:30-03:00'),
        product: 'Curso de Bem-estar',
        value: 4300,
        vendor: 'Paulo Evangelista'
      },
      {
        type: 2,
        date: new Date('2022-01-15T19:20:30-03:00'),
        product: 'Desenvolvedor Full Stack',
        value: 15000,
        vendor: 'John Smith'
      },
    ];
    Transaction.$queueResult(mockTransactions.map((transaction) => Transaction.build(transaction)));
  });

  describe('Given access to get transactions', () => {
    test('Then I expect to be able to receive a collection of all transactions', async () => {
      const mockResponse = await Transaction.findAll();
      const mockCollections = mockResponse.map((mock: any) => mock._values);
      expect(mockCollections).toHaveLength(2);
      expect(mockCollections).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            type: 1,
            date: new Date('2022-01-15T22:20:30.000Z'),
            value: 4300,
            vendor: 'Paulo Evangelista',
            product: 'Curso de Bem-estar',
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
          }),
          expect.objectContaining({
            id: expect.any(String),
            type: 2,
            date: new Date('2022-01-15T22:20:30.000Z'),
            value: 15000,
            vendor: 'John Smith',
            product: 'Desenvolvedor Full Stack',
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
          }),
        ]),
      );
    });
  })
})
