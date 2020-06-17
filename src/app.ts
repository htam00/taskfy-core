import * as express from 'express';
import router from './routes/index';
import { Application } from 'express';
import * as db from './config/database';
import { urlencoded, json} from 'body-parser';

const app: Application = express();

db.allow();
app.use(json());
app.use(urlencoded({ extended: false }))
app.use(router);

export default app;