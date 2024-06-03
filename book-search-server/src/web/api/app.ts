import { AwilixContainer } from 'awilix';
import express from 'express';
import { scopePerRequest } from 'awilix-express';
import reportController from './controllers/books-controller';
import { Dependencies } from '@web/container';
import { enableCors } from './middlewares/cors';

export function makeApp(container: AwilixContainer<Dependencies>) {
  const app = express();
  app.use(express.json());
  app.use(enableCors());
  app.use(scopePerRequest(container));


  app.use(reportController({ router: express.Router() }));


  return app;
}
