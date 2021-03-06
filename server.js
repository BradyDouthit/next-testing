const express = require('express')
const next = require('next')
const session = require('client-sessions')
const config = require('./bin/config')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//TODO: IMPLEMENT CLIENT-SESSIONS OR FIND A PACKAGE FOR SETTING COOKIES WITH NEXT JS
app.prepare().then(() => {
  const server = express()

  server.get('/home', (req, res) => {
    console.log(req.session)
    return app.render(req, res, '/home', req.query)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})