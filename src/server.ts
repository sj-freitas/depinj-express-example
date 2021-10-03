import http from 'http';

import { createExpressApplication } from './app';

const HOSTNAME = '0.0.0.0';
const PORT = 3000;

export async function go(hostname: string = HOSTNAME, port: number = PORT) {
  const server = await createHttpServer(hostname, port);
  return server;
}
  
if (require.main === module) {
  go();
}

function createHttpServer(hostname: string, port: number): Promise<http.Server> {
  return new Promise((resolve) => {
    const app = createExpressApplication();

    const server = app.listen(port, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
      resolve(server);
    });
  });
}
