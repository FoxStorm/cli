import { FoxStormServices, FoxStormApplication, FoxStormEnvironment, FoxStormConfig } from 'foxstorm'
import { configure } from './configure'
import { boot } from './boot'

export const application = (environment: FoxStormEnvironment): FoxStormApplication => {
  const config = new FoxStormConfig()
  const services = FoxStormServices.default()

  try { configure(services) } catch (error) { /* */ }

  const foxStormApplication = new FoxStormApplication(config, environment, services, console.log)

  try { boot(foxStormApplication) } catch (error) { /* */ }

  return foxStormApplication
}
