const http = require('spdy')
const debug = require('debug')('main')
const apolloServer = require('./apollo')
const app = require('./app')

const spdyOptions = {
  spdy: {
    plain: true
  }
}

apolloServer.applyMiddleware({ app })

const httpServer = http.createServer(spdyOptions, app)

apolloServer.installSubscriptionHandlers(httpServer)

const PORT = process.env.PORT || 8080
httpServer.listen(PORT, () => {
  debug(`http/https/h2 server runs on ${PORT}`)
})
