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
          switch (myUser.role.S) {
            case "admin":
              return {
                email: myUser.email.S,
                name:myUser.lastName.S,
                role: myUser.role.S,
              };
              case "user":
                return {
                  email: myUser.email.S,
                  name:"admin",
                  role: myUser.role.S,
                };
                case "company":
                  return {
                    email: myUser.email.S,
                    name:myUser.companyName.S,
                    role: myUser.role.S,
                  };
            default:
              return null
          }
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
      if (user?.name) {
        token.name = user.name;
      }
      // return final_token
      return token;
    },
    session({ session, token }) {
      const { id, email, role,name } = { ...token };
      const userData = { id, email, role,name };
      session.user = userData;

      return session;
    },
  },
});
