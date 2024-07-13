
export default async function (fastify, opts) {
  fastify.get('/content/:id', async function (request, reply) {
    try {
      const client = await fastify.pg.connect();
      try {
        const { rows } = await client.query('SELECT * FROM "ContentTable" WHERE content_id = $1', [request.params.id]);
        reply.send(rows);
      } finally {
        client.release();
      }
    } catch (err) {
      reply.send(err);
    }
  })
  
}
