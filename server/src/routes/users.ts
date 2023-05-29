import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { prisma } from '../lib/prisma'

export async function usersRoutes(app: FastifyInstance) {
	app.get('/user/:id', async (request, reply) => {
		const paramsSchema = z.object({
			id: z.string().uuid()
		})

		const { id } = paramsSchema.parse(request.params)

		const user = await prisma.user.findUniqueOrThrow({
			where: {
				id
			}
		})

		return user
	})
}
