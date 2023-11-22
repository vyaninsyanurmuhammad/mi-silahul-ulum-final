import React, { ReactNode } from 'react'
import SlidebarAdmin from "../components/navigation-bar-admin"

export default function Adminlayout({ children }: { children: ReactNode }) {
    return (
        <>
            <div className="flex flex-row w-full h-screen">
                <SlidebarAdmin />
                <div className="w-full pl-72">
                    {children}
                </div>
            </div>
        </>
    )
}
