import React, { ReactNode } from 'react'
import SlidebarAdmin from "../components/navigation-bar-admin"

export default function Adminlayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex flex-row w-full h-screen bg-slate-100">
                <SlidebarAdmin />
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
