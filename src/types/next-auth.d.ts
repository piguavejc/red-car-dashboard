import 'next-auth';

declare module 'next-auth' {
 interface Session {
  //   accessToken?: Account.accessToken;
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

// declare module 'next-auth/jwt' {
//  interface JWT {
//   accessToken?: Account.accessToken;
//  }
// }

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
