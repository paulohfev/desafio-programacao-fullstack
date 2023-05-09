import express from 'express';
import { BalanceController } from '../controllers/balance.controller';

const router = express.Router();

router.get('/balance', BalanceController.getBalance);

export default router;
