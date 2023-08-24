const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1.02') // change this string to ensure a new version deployed
})

app.get('/branch', (req, res) => {
  res.send('I make small change okey')
})

app.get('/tags', (req, res) => {
  res.send('Tag release testing')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
