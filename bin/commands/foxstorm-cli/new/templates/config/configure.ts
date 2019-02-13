import { FoxStormServices, Router, Server, PrintLogger, FoxStormApplication } from 'foxstorm'
import { LoggerServiceName, RouterServiceName } from './services'
import { routes } from '../http/routes'

export const configure = (services: FoxStormServices) => {
  services.registerServiceWithInterfaceAndFactory(Router, Router.name, (container) => {
    const logger = container.retrieveServiceFor(LoggerServiceName) as PrintLogger
    const router = new Router(logger.print)

    return router
  })

  services.registerServiceWithInterfaceAndFactory(Server, Server.name, (container) => {
    const router = container.retrieveServiceFor(RouterServiceName) as Router

    routes(router, container as FoxStormApplication)

    const server = new Server(router)
    server.setViewEngine(Server.TEMPLATE_ENGINE)

    return server
  })
}
