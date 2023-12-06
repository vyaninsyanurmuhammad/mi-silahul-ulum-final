import { Button } from "@nextui-org/react"
import React, { MouseEventHandler, ReactNode } from 'react'

export default function TipTapButton(
    {
        onClick,
        disabled,
        className,
        children,
        isActive,
        isNotIconOnly = false,
    }: {
        onClick?: MouseEventHandler<HTMLButtonElement>,
        disabled?: boolean,
        className?: string,
        children?: ReactNode,
        isActive?: boolean,
        isNotIconOnly?: boolean,
    }) {
    return (
        <>
            <Button isIconOnly={isNotIconOnly ? false : true}
                onClick={onClick}
                disabled={disabled}
                size="sm"
                className={`${className} ${isActive ? `bg-aztec-400 text-white` : ``} ${disabled ? `opacity-40` : ``}`}
            >
                {children}
            </Button>
        </>
    )
}
