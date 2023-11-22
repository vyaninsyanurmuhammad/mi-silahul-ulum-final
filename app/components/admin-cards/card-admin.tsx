'use client'

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid"
import { ArrowRightIcon, PencilIcon } from "@heroicons/react/24/outline"
import { Button, Card, CardHeader, Link } from "@nextui-org/react"
import React from 'react'

export default function CardAdmin({ children, title, seeMoreLink, }: { children?: React.ReactNode, title?: string, seeMoreLink?: string }) {
    return (
        <>
            <Card className="w-full">
                <CardHeader className="p-4 flex flex-col items-start w-full" >
                    <div className="flex flex-row w-full gap-4 items-center justify-between pb-2">
                        <p className="text-small uppercase font-bold">{title}</p>
                        {
                            seeMoreLink !== undefined ? <Link className="flex gap-2 text-aztec-700 capitalize text-small"><span>Lihat Selengkapnya </span><ArrowTopRightOnSquareIcon className="h-6 w-6 " /></Link>
                                : <></>
                        }
                    </div>
                    <div className="flex flex-row w-full gap-3">
                        {
                            children
                        }
                    </div>

                </CardHeader>
            </Card>

        </>
    )
}
