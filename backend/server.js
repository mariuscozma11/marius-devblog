const fastify = require('fastify')()

fastify.register(require('@fastify/postgres'), {
  connectionString: 'postgres://postgres:marius@localhost:5432/dev_blog'
})

fastify.get('/post/:id', function (req, reply) {
  fastify.pg.query(
    'SELECT id, title, content, created_at, updated_at FROM posts WHERE id=$1', [req.params.id],
    function onResult (err, result) {
      reply.send(err || result)
    }
  )
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
