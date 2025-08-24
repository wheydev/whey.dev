import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const googleClientId = process.env.GOOGLE_CLIENT_ID
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET

if (!googleClientId) {
  throw new Error('Missing required environment variable: GOOGLE_CLIENT_ID')
}
if (!googleClientSecret) {
  throw new Error('Missing required environment variable: GOOGLE_CLIENT_SECRET')
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
        }
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }