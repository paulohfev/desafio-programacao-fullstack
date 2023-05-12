import { NextFunction, Request, Response } from 'express';
import Transaction from '../models/transaction.model';

const getBalance = (req: Request, res: Response, next: NextFunction) => {
  let balance = {
    totalProducer: 0,
    totalAffiliate: 0,
    comissionToPay: 0,
  }

  Transaction.findAll()
    .then((transactions) => {
      transactions.forEach((transaction: any) => {
        if (transaction.type === 1) {
          balance.totalProducer += transaction.value;
        } else if (transaction.type === 2) {
          balance.totalAffiliate += transaction.value;
        } else if (transaction.type === 3) {
          balance.totalProducer -= transaction.value;
          balance.comissionToPay += transaction.value;
        }
      })

      res.send(balance);
    })
    .catch((err) => {
      res.statusMessage = "We were unable to generate your balance. Please try again later or contact the support team";
      return res.status(400).send(err);
    });
}

const getBalanceByAffiliate = (req: Request, res: Response, next: NextFunction) => {
  let balance = 0;
  const affiliateName = req.params.affiliateName;

  Transaction.findAll({ where: { vendor: affiliateName } })
    .then((transactions) => {
      transactions.forEach((transaction: any) => {
        if (transaction.type === 4) {
          balance += transaction.value
        }
      });

      res.status(200).send({ data: balance });
    })
    .catch((err) => {
      res.statusMessage = "The affiliate's balance was not found."
      return res.status(400).send(err);
    });
}

export const BalanceController = {
  getBalance,
  getBalanceByAffiliate,
};
