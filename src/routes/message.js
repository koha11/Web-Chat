import { Router } from 'express';

const router = Router();

const testControler = { get: '1' };

router.get('/', testControler.get);

export default router;
