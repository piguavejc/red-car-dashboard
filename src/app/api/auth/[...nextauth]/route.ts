import CredentialsProvider from 'next-auth/providers/credentials';
import { ServiceUser } from '@/mvc/services';
import { LoginModel, RegisterModel } from '@/mvc/models';
import NextAuth from 'next-auth';
import { AdapterUser } from 'next-auth/adapters';

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
  throw error;
 }
 return null;
};

const handler = NextAuth({
 providers: [
  CredentialsProvider({
   name: 'Credentials',
   credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
    password: { label: 'Password', type: 'password' },
   },
   async authorize(credentials, req) {
    try {
     const data = await yourAuthenticationLogic({
      username: credentials?.username as string,
      password: credentials?.password as string,
     });
     return data;
    } catch (error) {
     throw error;
    }
    return null;
   },
  }),
 ],
 callbacks: {
  async session({ session, user, token }) {
   session.user = token as any;
   return session;
  },
  async jwt({ token, user, account, profile }) {
   return { ...token, ...user };
  },
 },
});
export { handler as GET, handler as POST };
