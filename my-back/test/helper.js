
import {build as buildApplication} from 'fastify-cli/helper';
import path from 'node:path'; 


const AppPath = path.join(__dirname, '..', 'app.js')

// Fill in this config with all the configurations
// needed for testing the application
export function config () {
  return {}
}

// automatically build and tear down our instance
export async function build (t) {
  // you can set all the options supported by the fastify CLI command
  const argv = [AppPath]

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  const app = await buildApplication(argv, config())

  // close the app after we are done
  t.after(() => app.close())

  return app
}
