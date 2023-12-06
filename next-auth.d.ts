import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        firebaseToken?: string,
        user: {
            id: string;
            name: string;
            email: string;
        } & Session['user']; // Adjust the type according to your user object structure
    }
}
