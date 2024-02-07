import cookie from '@fastify/cookie';
import fastify from 'fastify';
import { createPoll } from './routes/create-poll';
import { getPoll } from './routes/get-poll';
import { voteOnPoll } from './routes/vote-on-poll';

const app = fastify()

app.register(cookie, {
  secret: "D60vzzxsQj6vWuGA6kbHeKr6yRb3931fJtpsDDEZFFc=",
  hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server is running on port 3333.")
})
