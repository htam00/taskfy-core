import { createServer } from 'http';
import app from './app';

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

const server = createServer(app);
server.listen(port, () => console.log(`Listen Running http://${host}:${port}`));