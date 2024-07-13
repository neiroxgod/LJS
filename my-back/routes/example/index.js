
export default async function (fastify, opts) {
  fastify.get('/content/:id', async function (request, reply) {
    fastify.pg.connect(onConnect)

    function onConnect(err, client, release){
      if (err) return reply.send(err);

      client.query('SELECT * FROM "ContentTable" WHERE id =$1', [request.params.id],
        function onResult(err, result) {
          release()
          reply.send(err || result)
        }
      )
    }
  })
  
}
