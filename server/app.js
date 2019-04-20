/**
 * Having the app in a dedicated file allow to easily migrate to serverless functions.
 */
const express = require('express')

let app = express()

/**
 * Static middleware.
 *
 * Serves the assets and the user uploads
 */
app.use(express.static('build', { maxAge: 60 * 60 * 24 * 5 })) // /assets and /static
if (process.env.NODE_ENV === 'development') {
  app.use(express.static('public')) // only /assets and /static are served by webpack
}
app.use(express.static('data/upload', { maxAge: 60 * 60 * 24 * 5 }))

// Example End-points, one public with no auth, one private, one public with auth
app.get('/public', (req, res) => {
  res.json({
    message:
      "Hello from a public endpoint! You don't need to be authenticated to see this."
  })
})

module.exports = app
