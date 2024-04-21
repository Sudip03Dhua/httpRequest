const express = require('express')
const app = express()
const port = 3000

var fs = require('fs');



//Middleware1
  app.use((req, res, next)=> {
    fs.appendFileSync('input.txt', `Date: ${Date.now()} is ${req.method}\n`);
    console.log('m1')
    next()
  })

//Middleware2
app.use((req, res, next)=> {
    console.log('m2')
    next()
  })


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})