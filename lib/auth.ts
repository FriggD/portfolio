import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // For demo purposes, accept any credentials
        if (credentials) {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
          }
        }
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "a-very-secret-key-that-should-be-changed",
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
}
