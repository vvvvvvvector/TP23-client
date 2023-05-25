import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    expires: string;
    user: {
      token: string;
      user: {
        user_id: number;
        username: string;
        email: string;
        height: number;
        weight: number;
        sex: string;
        age: number;
        activity_level: string;
        img_url: string;
      };
    };
  }
}
