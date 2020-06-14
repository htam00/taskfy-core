import * as express from 'express';
import router from './routes/index';
import { Application } from 'express';

const app: Application = express();

app.use(router);

export default app;