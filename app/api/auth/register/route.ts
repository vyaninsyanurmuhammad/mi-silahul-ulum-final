import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { auth, firestore } from "@/app/firebase/firebaseConfig";
import { UserModel } from "@/app/models/user-model";
import { query, collection, where, getDocs, addDoc } from "firebase/firestore";
import { UserCredential, createUserWithEmailAndPassword, updateProfile, } from "firebase/auth";

export async function POST(req: NextRequest) {
    try {

        const json = await req.json();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(json.email)) {
            return new NextResponse(JSON.stringify({ error: 'Invalid Email' }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const usersCollection = query(collection(firestore, "Users"),
            where("email", "==", json.email)
        )

        const querySnapshot = await getDocs(usersCollection);

        const user: UserModel | null = querySnapshot.docs.length > 0 ? { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as UserModel : null

        if (user) {
            return new NextResponse(JSON.stringify({ error: 'Username already exists' }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        let newUser: UserCredential

        newUser = await createUserWithEmailAndPassword(auth, json.email, json.password)

        await updateProfile(newUser.user, { displayName: json.name })

        console.log(newUser.user.uid);

        return NextResponse.json({
            message: `${newUser.user.uid}, ${newUser.user.displayName} successful registered`

        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}