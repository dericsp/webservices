import express from 'express'

const server = express()
const port = process.env.PORT || 3000

server.get('/users', function(req, res) {
  const users = [
    {
      name: 'Eric'
    }, 
    {
      name: 'Clara'
    },
  ]

  res.json(users)

})

server.listen(port, () => console.log(`localhost:${port}`))

