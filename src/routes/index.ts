import { Router } from 'express';
import { homepage } from '../controllers/app/index';

const router: any = Router();

router.get('/', homepage);
router.get('/api/')

export default router;