import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./db/queries/usersQueries";
import bcrypt from "bcryptjs";
import connectToDatabase from "./db/mongodb";

export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST },
}  = NextAuth({
    session: {
        strategy: 'jwt' 
    },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {



        // await connectToDatabase();

        if (!credentials) {
          throw new Error('Missing credentials');
        }

        const user = await getUserByEmail("J@j.com");

        if (!user) {
          throw new Error('No user found with the given email');
        }

        if (user) {
          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (isValid) {
            return { id: user._id, name: user.name, email: user.email };
          }
        }
      },
    }),
  ],
});