import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@models/User';
import connectMongoDB from '@libs/mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

const handler = async (req, res) => {
  await connectMongoDB();

  return NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: {label: 'Email', type: 'email'},
          password: {label: 'Password', type: 'password'},
        },
        async authorize(credentials) {
          const user = await User.findOne({ email: credentials.email, password: credentials.password })

          if(!user){
            throw new Error('Invalid credentials')
          }

          return {email: user.email, name: user.name}
        }
      }),
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(await connectMongoDB()),
    session: {
      strategy: 'jwt',
    },
    pages: {
      signIn: '/login', 
      verifyRequest: '/auth/verify',
    },
  })
}

export { handler as GET, handler as POST }
