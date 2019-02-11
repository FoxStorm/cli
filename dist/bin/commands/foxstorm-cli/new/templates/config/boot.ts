import { FoxStormApplication, PrintLogger } from 'foxstorm'

export const boot = (application: FoxStormApplication) => {
  const logger = application.retrieveServiceFor('PrintLogger') as PrintLogger

  logger.print('\n Application Booted 🚀')
}
