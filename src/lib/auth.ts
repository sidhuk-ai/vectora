import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from './db'
import { nextCookies } from 'better-auth/next-js'

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true
    },
    database: prismaAdapter(prisma,{
        provider: "postgresql"
    }),
    plugins: [nextCookies()]
})