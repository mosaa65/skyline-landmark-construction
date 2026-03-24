import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const adminEmail = process.env.PORTAL_ADMIN_EMAIL;
const adminPassword = process.env.PORTAL_ADMIN_PASSWORD;

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!adminEmail || !adminPassword) return null;
        if (credentials?.email === adminEmail && credentials?.password === adminPassword) {
          return {
            id: "admin",
            name: "Portal Admin",
            email: adminEmail,
            role: "admin",
          };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
});
