import { makeContainer } from '@web/container';
import { makeApp } from './app';

const container = makeContainer();
const port = Number(process.env.PORT || 8000);


makeApp(container).listen(port, function startServer() {

  // We could potentially insert some logging her
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`)
});
