import express, {Request, Response} from 'express';
import path from 'path';
const router = express.Router();

const assetsPath = path.join(__dirname, '../../../dist');
console.log(assetsPath);
router
  .use(express.static(assetsPath))
  .get('/hearbeat', (req: Request, res: Response) => {
    res.send('live');
  });

export default router;
