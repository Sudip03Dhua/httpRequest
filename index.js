const express = require('express')
const app = express()
const port = 3000


const blog = require('./routes/blog')

app.use('/blog', blog)

app.get('/api', (req, res) => res.json({a:1,b:2,c:3,name:["kq","sd","kqsd"]}))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))