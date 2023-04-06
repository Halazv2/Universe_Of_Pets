import bodyParser from 'body-parser';
import compression from 'compression';
import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import router from './routes/routes';
import cors from 'cors';
const app = express();

function logResponseTime(req: Request, res: Response, next: NextFunction) {
  const startHrTime = process.hrtime();

  res.on('finish', () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    const message = `${req.method} ${res.statusCode} ${elapsedTimeInMs}ms\t${req.path}`;

    console.log(message);
  });

  next();
}

app.use(logResponseTime);

/* A middleware that compresses the response body. */
app.use(compression());
/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(bodyParser.json({ limit: '100mb' }));
/* Parsing the body of the request and making it available in the req.body property. */
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true, parameterLimit: 50000 }));

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.get('/uploads/:filename', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/uploads/' + req.params.filename));
});

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use(router, express.static(path.join(__dirname, 'public')));

app.use((err: { status: any; message: any }, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || 500).json({
    error: err.message
  });
});

export default app;
