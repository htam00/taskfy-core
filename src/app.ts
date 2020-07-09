import * as dotenv from 'dotenv';
import * as express from 'express';
import router from './routes/index';
import { Application, Request, Response, NextFunction } from 'express';
import * as db from './config/database';
import * as compression from 'compression';
import { urlencoded, json} from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';

const app: Application = express();

dotenv.config();
db.allow();
app.use(cors());
app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(compression());
app.use(router);

export default app;
