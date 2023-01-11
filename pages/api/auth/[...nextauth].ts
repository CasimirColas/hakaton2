import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        return null
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      // update token
      if (user?.role && user?.id) {
        token.role = user.role;
        token.id = user.id;
      }
      // return final_token
      return token;
    },
    session({ session, token }) {
      const { id, email, role } = { ...token };
      const userData = { id, email, role };
      session.user = userData;

      return session;
    },
  },
});
