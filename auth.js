import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer"
import Credentials from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import bcrypt from "bcrypt"

import User from "@models/User"
import connectMongoDB from "@libs/mongodb"
import clientPromise from "@libs/mongo-client"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectMongoDB()

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials")
        }

        const user = await User.findOne({
          email: credentials.email,
        }).select("+password name email emailVerified")

        if (!user) {
          throw new Error("Invalid credentials")
        }

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isMatch) {
          throw new Error("Invalid credentials")
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          emailVerified: user.emailVerified ?? null,
        }
      },
    }),

    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
    verifyRequest: "/auth/verify",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.emailVerified = user.emailVerified
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
        session.user.email = token.email
        session.user.name = token.name
        session.user.emailVerified = token.emailVerified
      }
      return session
    },
  },

  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
})