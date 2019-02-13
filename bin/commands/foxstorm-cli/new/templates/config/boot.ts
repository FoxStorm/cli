import { FoxStormApplication, PrintLogger } from 'foxstorm'
import { LoggerServiceName } from './services'

export const boot = (application: FoxStormApplication) => {
  const logger = application.retrieveServiceFor(LoggerServiceName) as PrintLogger

  logger.print('\n Application Booted 🚀')
}
