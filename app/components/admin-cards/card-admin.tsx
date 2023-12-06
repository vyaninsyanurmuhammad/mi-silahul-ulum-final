'use client'

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid"
import { ArrowRightIcon, PencilIcon } from "@heroicons/react/24/outline"
import { Button, Card, CardHeader, Link } from "@nextui-org/react"
import React, { ReactNode } from 'react'

type CardAdminProps = {
    children?: ReactNode,
    title?: string,
    seeMoreLink?: string,
}

export default function CardAdmin({ children, title, seeMoreLink, }: CardAdminProps) {
    return (
        <>
            <Card className="w-full">
                <CardHeader className="p-4 flex flex-col items-start w-full" >
                    <div className="flex flex-row w-full gap-4 items-center justify-between pb-2">
                        <p className="text-small uppercase font-bold text-night-800">{title}</p>
                        {
                            seeMoreLink !== undefined ? <Link className="flex gap-2 text-aztec-700 capitalize text-small"><span className="hidden md:block">Lihat Selengkapnya </span><ArrowTopRightOnSquareIcon className="h-6 w-6 " /></Link>
                                : <></>
                        }
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-3">
                        {
                            children
                        }
                    </div>

                </CardHeader>
            </Card>

        </>
    )
}
