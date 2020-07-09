import * as http from 'http';
import app from './app';

const port = process.env.PORT || 4000;
const host = process.env.HOST || 'localhost';

const server = http.createServer(app);

server.listen(port, () => console.log(`Listen Running http://${host}:${port}`));
