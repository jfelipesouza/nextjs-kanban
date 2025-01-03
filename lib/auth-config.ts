import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'

export const auth: NextAuthOptions = {
  pages: {
    signIn: '/',
    signOut: '/'
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'asdasd' },
        password: { label: 'password', type: 'password' }
      },

      async authorize(credentials, req) {
        return null
      }
    })
  ]
}
