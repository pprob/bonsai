import express, {Request, Response} from 'express';
import path from 'path';
const router = express.Router();

const assetsPath = path.join(__dirname, '../../../dist');

router
  .use(express.static(assetsPath))
  .get('/heartbeat', (req: Request, res: Response) => {
    res.send('server:live');
  });

export default router;
