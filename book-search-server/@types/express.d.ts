import { AwilixContainer } from 'awilix';
import { Dependencies } from '@web/container';

declare global {
  namespace Express {
    interface Request {
      container: AwilixContainer<Dependencies>;
    }
  }
}
