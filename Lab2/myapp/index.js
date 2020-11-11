const express = require('express')
const app = express()
const port = 3000
const appInsights = require('applicationinsights');
appInsights.setup('de60db2f-7d13-4fcc-9ada-7473c3d58a48').start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})