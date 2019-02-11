import { FoxStormEnvironment, PrintLogger, Server } from 'foxstorm'
import { application } from './config/application'

try {
  const app = application(FoxStormEnvironment.development())
  const server = app.retrieveServiceFor('Server') as Server
  const logger = app.retrieveServiceFor('PrintLogger') as PrintLogger

  const port = 2020

  server.start(port, () => {
    logger.print('\n' + '='.repeat(77))
    logger.print(`FoxStorm 0.0.1 Initialised & running on port ${port}, URL: http://localhost:${port}`)
    logger.print(`FoxStorm is running on ${app.environment.name}`)
    logger.print(`Ctrl-C to shut-down the server`)
  })
} catch (error) {
  throw error
}
