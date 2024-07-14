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

  fastify.get('/content/list', async function (request, reply) {
    try {
      const client = await fastify.pg.connect();
      try {
        const { rows } = await client.query('SELECT * FROM "ContentTable"');
        let customReply = {status: 'zaebis', data: rows};
        reply.send(customReply);
      } finally {
        client.release();
      }
    } catch (err) {
      reply.send(err);
    }
  })

  fastify.post('/content/add', async function (request, reply) {
    const { content_title, content_description, content_text, timeadd, tag, tag_object } = request.body;

    try {
      const res = await client.query(
        'INSERT INTO "ContentTable" (content_title, content_description, content_text, timeadd, tag, tag_object) VALUES (\$1, \$2, \$3, \$4, \$5, \$6) RETURNING *',
        [content_title, content_description, content_text, timeadd, tag, tag_object]
      );
      reply.send(res.rows[0]);
    } catch (err) {
      fastify.log.error(err);
      reply.status(500).send({ error: 'Database error' });
    }
  })
  

  fastify.put('/content/update/:id', async (request, reply) => {
    const { id } = request.params;
    const { content_title, content_description, content_text, timeadd, tag, tag_object } = request.body;
  
    try {
      const res = await client.query(
        'UPDATE "ContentTable" SET content_title = \$1, content_description = \$2, content_text = \$3, timeadd = \$4, tag = \$5, tag_object = \$6 WHERE id = \$7 RETURNING *',
        [content_title, content_description, content_text, timeadd, tag, tag_object, id]
      );
      if (res.rowCount === 0) {
        reply.status(404).send({ error: 'Record not found' });
      } else {
        reply.send(res.rows[0]);
      }
    } catch (err) {
      fastify.log.error(err);
      reply.status(500).send({ error: 'Database error' });
    }
  });


  fastify.delete('/content/delete/:id', async (request, reply) => {
    const { id } = request.params;
  
    try {
      const res = await client.query(
        'DELETE FROM "ContentTable" WHERE id = \$1 RETURNING *',
        [id]
      );
      if (res.rowCount === 0) {
        reply.status(404).send({ error: 'Record not found' });
      } else {
        reply.send(res.rows[0]);
      }
    } catch (err) {
      fastify.log.error(err);
      reply.status(500).send({ error: 'Database error' });
    }
  });
  
}

