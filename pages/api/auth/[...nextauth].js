import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import getUserByEmail from "../../../dynamodb/functionUser/read";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        const myUser = await getUserByEmail(email);
        if (!myUser) {
          throw new Error("User not found");
        }
        if (myUser.password.S === password) {
          return {
            email: myUser.email.S,
            role: myUser.role.S,
          };
        } else {
          throw new Error("Incorrect password");
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      // update token
      if (user?.role) {
        token.role = user.role;
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
