'use client'

import { redirect, useRouter } from "next/navigation"
import React from 'react'

export default function AdminPage() {
    
    redirect('/admin/beranda')

    return (
        <>
            <div>page</div>
        </>
    )
}
