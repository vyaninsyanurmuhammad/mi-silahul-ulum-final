import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { auth, firestore } from "@/app/firebase/firebaseConfig";
import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { UserModel } from "@/app/models/user-model";
import { signInWithEmailAndPassword } from "firebase/auth";
import { adminAuth, adminFirestore } from "@/app/firebase/firebaseAdmin";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 3,
    },
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {

                const user = await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '').catch((error) => console.log(error))

                if (user) return {
                    id: user.user.uid,
                    email: user.user.email,
                    name: user.user.displayName,
                }

                return null
            }
        }),
    ],

    callbacks: {
        session: async ({ session, token }) => {

            if (session?.user) {
                if (token.sub) {
                    session.user.id = token.sub
                    session.user.name = token.name
                    session.user.email = token.email
                }
            }
            // console.log('Session Callback', { session, token });

            return session
        },

        jwt: async ({ user, token }) => {
            if (user) {
                token.sub = user.id
            }
            // console.log('Jwt Callback', { user, token });

            return token
        }
    },

    pages: {
        signIn: '/auth/login',
    },

    adapter: FirestoreAdapter(adminFirestore),
    secret: process.env.NEXTAUTH_SECRET,

} satisfies NextAuthOptions
