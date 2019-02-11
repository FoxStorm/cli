export const routes = (router: any): void => {

  router.root((req: any, res: any) => {
    res.render('welcome')
  })

  router.post('/create', (req: any, res: any) => {
    res.send('Hey')
  })
}
