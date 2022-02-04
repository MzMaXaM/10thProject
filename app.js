const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }));

app.get('/currenttime', (req, res) => {
  res.send('<h1>' + new Date().toISOString() + '</h1>')
})//localhost:3311/currenttime
app.get('/', (req, res) => {
  res.send('<h1>Hello User</h1><form action="/store-user" method="POST"><label for="name">Your Name</label><br><input type="text" name="username" id="name"><br><button type="submit">Submit</button></form>')
})//localhost:3311/

app.post('/store-user', function (req, res) {
  const username = req.body.username
  console.log(username)
  res.send('<h1>Username stored!</h1>')
})

app.listen(3311)
