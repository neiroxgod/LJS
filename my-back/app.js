import path, {dirname} from 'node:path'; 
import AutoLoad from '@fastify/autoload'; 
import { fileURLToPath } from 'node:url';
import cors from '@fastify/cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Pass --options via CLI arguments in command to enable these options.
export const options = {

}

export default async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(cors, {
    origin: '*',
    methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'UPDATE', 'DELETE'],
  });


  fastify.register(import('@fastify/postgres'), {
    connectionString: 'postgres://postgres:root@localhost/postgres'
  })



  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}



