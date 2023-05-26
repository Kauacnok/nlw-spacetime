import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import staticFolder from '@fastify/static'
import { extname, resolve } from 'node:path'

import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { memoriesPublicRoutes } from './routes/memories-public'

const app = fastify()

app.register(multipart)
app.register(staticFolder, {
	root: resolve(__dirname, '../uploads'),
	prefix: '/uploads'
})

app.register(cors, {
	origin: true
})

app.register(jwt, {
	secret: 'spacetime_nlw_kauacnok'
})

app.register(memoriesRoutes)
app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesPublicRoutes)

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log('HTTP server running on http://localhost:3333')
})
