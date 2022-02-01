const express = require('express')
const app = express()


app.get('/currenttime', (req, res)=>{
  res.send('<h1>' + new Date().toISOString() + '</h1>')
})//localhost:3311/currenttime
app.get('/', (req, res)=>{
  res.send('<h1>Hello Max</h1>')
})//localhost:3311/

app.listen(3311)
