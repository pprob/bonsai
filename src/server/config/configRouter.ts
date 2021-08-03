import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/main.js', (req: Request, res: Response) => {
  const frameworkGlobals = {
    test: true,
  };

  res.set('Content-Type', 'application/javascript');
  res.send(`window.frameworkGlobals=${JSON.stringify(frameworkGlobals)}`);
});

export default router;
