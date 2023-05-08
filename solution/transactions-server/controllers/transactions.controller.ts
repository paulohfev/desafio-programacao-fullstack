import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import readline from 'readline';
import { Transaction as TransactionInterface } from '../interfaces/transaction.interface';
import Transaction from '../models/transaction.model';

const createTransactions = (req: Request, res: Response, next: NextFunction) => {
  if (req.file) {
    const newTransactions: any[] = [];

    const rl = readline.createInterface({
      input: fs.createReadStream(req.file.path,'utf8'),
      crlfDelay: Infinity,
    });
    
    rl.on('line', (line) => {
      newTransactions.push({
        type: Number(line.slice(0, 1)),
        date: new Date(line.slice(1, 26)),
        product: line.slice(26, 56).trim(),
        value: Number(parseFloat(line.slice(56, 66)).toFixed(2)),
        vendor: line.slice(66, 86).trim(),
      })
    });

    rl.on('close', () => {
      Transaction.bulkCreate(newTransactions)
    })
  }
}

export const TransactionsController = {
  createTransactions,
}