import React, { ReactNode } from 'react'
import SlidebarAdmin from "../components/navifation-bar-admin"

export default function Adminlayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="w-full h-screen bg-slate-100">
                <SlidebarAdmin />
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
