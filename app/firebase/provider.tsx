'use client'

import { signInWithCustomToken } from "firebase/auth"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"
import React, { ReactNode, useEffect } from 'react'
import { auth } from "./firebaseConfig"

async function syncFirebaseAuth(session: Session) {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken)
    } catch (error) {
      console.log(error)
    }
  } else {
    auth.signOut()
  }
}

export default function FirebaseProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession()

  useEffect(() => {
    if (!session) return

    syncFirebaseAuth(session)

  }, [session])

  return (
    <>{children}</>
  )
}
