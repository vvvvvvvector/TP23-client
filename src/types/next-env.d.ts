import NextAuth from 'next-auth';

import { SessionUserType } from './shared';

declare module 'next-auth' {
  interface Session {
    expires: string;
    user: SessionUserType;
  }
}
