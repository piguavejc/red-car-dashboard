import 'next-auth';

declare module 'next-auth' {
 interface Session {
  user: {
   id: number;
   name: string;
   email: string;
   user: string;
   token: string;
   emailVerified?: string;
  };
 }
}
declare module 'next-auth/adapters' {
 interface AdapterUser {
  id: number;
  name: string;
  email: string;
  user: string;
  token: string;
  emailVerified?: string;
 }
}
