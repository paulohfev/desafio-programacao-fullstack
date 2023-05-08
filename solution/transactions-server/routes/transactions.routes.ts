import express from 'express';
import multer from 'multer';
import { TransactionsController } from '../controllers/transactions.controller';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/transactions', upload.single('transactions'), TransactionsController.createTransactions);

export default router;
