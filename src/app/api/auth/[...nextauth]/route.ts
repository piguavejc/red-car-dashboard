import CredentialsProvider from 'next-auth/providers/credentials';
import { AdapterUser } from 'next-auth/adapters';
import { ServiceUser } from '@/mvc/services';
import { LoginModel } from '@/mvc/models';
import NextAuth from 'next-auth';

const service: ServiceUser = ServiceUser.getService();

// Example authentication logic (replace this with your actual logic)
const yourAuthenticationLogic = async (credentials: {
 username: string;
 password: string;
}): Promise<AdapterUser | null> => {
 const user: LoginModel = { user: credentials.username, password: credentials.password };
 try {
  const rs = await service.login(user);
  const { id_user, user_name, email, full_name } = rs.data.data;
  return {
   id: String(id_user),
   email,
   name: full_name,
   user: user_name,
   token: rs.data.token,
  };
 } catch (error) {
  console.error(error);
  throw error;
 }
};

const handler = NextAuth({
 providers: [
  CredentialsProvider({
   name: 'Credentials',
   credentials: {
    email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    password: { label: 'Password', type: 'password' },
   },
   async authorize(credentials) {
    try {
     const data = await yourAuthenticationLogic({
      username: credentials?.email as string,
      password: credentials?.password as string,
     });
     return data;
    } catch (error) {
     console.error(error);
     throw error;
    }
   },
  }),
 ],
 callbacks: {
  async session({ session, token }) {
   /* eslint-disable */
   session.user = token as any;
   /* eslint-disable */
   return session;
  },
  async jwt({ token, user }) {
   return { ...token, ...user };
  },
 },
 session: { maxAge: 7200 },
 pages: {
  signIn: '/login',
 },
});
export { handler as GET, handler as POST };
