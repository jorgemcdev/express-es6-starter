import express from 'express';
import morgan from 'morgan';
import favicon from 'serve-favicon';
import path from 'path';
import logger from 'winston';
import compression from 'compression';
import config from 'config';
import bodyParser from 'body-parser';

const app = express();
app.use(morgan('tiny'));
app.use(compression());
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('*', (req, res) => {
  res.status(404).send({ error: '404' });
});

app.use((err, req, res) => {
  logger.log('error', err);
  res.status(err.status || 500).send({ error: 'Something went wrong' });
});

app.listen(config.PORT, (err) => {
  if (err) logger.log('error', 'cant start server', { err });
  logger.log('info', 'Server Started', {
    port: config.PORT,
    ENV: process.env.NODE_ENV,
  });
});

export default app;
