import { NextAuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { JWT } from 'next-auth/jwt';
import jsonwebtoken from 'jsonwebtoken';
import { RegisterModel, UserModel } from '@/mvc/models';
import { ServiceUser } from '@/mvc/services';
const authOptions: NextAuthOptions = {
 providers: [
  GoogleProvider({
   clientId: process.env.GOOGLE_CLIENT_ID as string,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  }),
 ],
 callbacks: {
  async session({ session }) {
   return session;
  },

  async signIn({ user }: { user: User }) {
   try {
    return true;
   } catch (error) {
    console.log(error);
   }
   return false;
  },
 },
};
export { authOptions };
