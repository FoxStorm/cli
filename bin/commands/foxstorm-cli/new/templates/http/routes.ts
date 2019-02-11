import { Router, Request, Response } from 'foxstorm'

export const routes = (router: Router): void => {

  router.root((req: Request, res: Response) => {
    res.render('welcome')
  })

  router.post('/create', (req: Request, res: Response) => {
    res.send('Hey')
  })
}
