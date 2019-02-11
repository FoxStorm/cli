import { FoxStormServices, Router, Server, PrintLogger } from 'foxstorm'
import { routes } from '../http/routes'

export const configure = (services: FoxStormServices) => {
  services.registerServiceWithInterfaceAndFactory(Router, Router.name, (container) => {
    const logger = container.retrieveServiceFor('PrintLogger') as PrintLogger
    const router = new Router(logger.print)

    return router
  })

  services.registerServiceWithInterfaceAndFactory(Server, Server.name, (container) => {
    const router = container.retrieveServiceFor('Router') as Router

    routes(router)

    const server = new Server(router)
    server.setViewEngine(Server.TEMPLATE_ENGINE)

    return server
  })
}
