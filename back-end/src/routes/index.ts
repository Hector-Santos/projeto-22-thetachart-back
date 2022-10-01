import { Router } from 'express';
import authRouter from './authRouter';
import barChartRouter from './barCartRouter';




const router = Router();
router.use(authRouter);
router.use(barChartRouter);



export default router;
