import express, {json} from 'express';
import path from 'path';
import ejs from 'ejs';
import cookieParser from 'cookie-parser';
import 'express-async-errors';
import pageRouter from './pages/index';
import staticRouter from './config/staticRouter';
import configRouter from './config/configRouter';

const assetsPath = path.join(__dirname, '../../dist');

const app = express();

app
  .set('views', assetsPath)
  .set('view engine', 'html')
  .engine('html', ejs.renderFile)
  .use(json())
  .use(cookieParser())
  .use(staticRouter)
  .use('/config', configRouter)
  .use('/api', (req, res) => {
    res.send('hello');
  })
  .get('*', pageRouter);

export default app;
