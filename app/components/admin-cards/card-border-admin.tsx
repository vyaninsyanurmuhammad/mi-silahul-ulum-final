import React, { ReactNode } from 'react'

export default function CardBorderAdmin({ size = "w-full", children }: { size?: string, children?: ReactNode }) {
    return (
        <>
            <div className={`${size} border border-dashed border-aztec-700 rounded-xl`}>
                {children}
            </div>
        </>
    )
}
