import { NextFunction, Request, Response } from 'express';
import Transaction from '../models/transaction.model';

const getBalance = (req: Request, res: Response, next: NextFunction) => {
  let balance = {
    saleVendor: 0,
    saleAffiliate: 0,
    comissionPaid: 0,
    comissionReceived: 0,
  }

  Transaction.findAll()
    .then((transactions) => {
      transactions.forEach((transaction: any) => {
        if (transaction.type === 1) {
          balance.saleVendor += transaction.value
        } else if (transaction.type === 2) {
          balance.saleAffiliate += transaction.value
        } else if (transaction.type === 3) {
          balance.comissionPaid += transaction.value
        } else if (transaction.type === 4) {
          balance.comissionReceived += transaction.value
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

        res.status(200).send(balance);
      });
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
