import { Router, Request, Response, FoxStormApplication } from 'foxstorm'

/*** Controllers
* import { OrderController } from './controllers/OrderController'
* import { StatusController } from './controllers/StatusController'
***/

/*** Services to be used by controllers
* import { MailerServiceName, LoggerServiceName } from '../config/services'
***/

export const routes = (router: Router, container: FoxStormApplication): void => {

  /*** Retrieve services that needs to be injected in the controllers
  * const mailer = container.retrieveServiceFor(MailerServiceName)
  * const logger = container.retrieveServiceFor(LoggerServiceName)
  ***/

  /*** Initialize controllers
  * const orderController = new OrderController(mailer)
  * const statusController = new StatusController(logger)
  ***/

  /*** Set routes ***/
  router.root((req: Request, res: Response) => {
    res.render('welcome')
  })

  /***
  * router.get('/order', orderController.order)
  * router.get('/status', statusController.status)
  ***/
}
