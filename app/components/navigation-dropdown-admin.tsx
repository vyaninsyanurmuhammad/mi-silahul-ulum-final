'use client'

import React, { useEffect, useState } from 'react'
import { NavigationModel } from "../models/navigation";
import { Button, Link } from "@nextui-org/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";

export default function NavigationDropdownAdmin(
    {
        navigation,
        isActive = false
    }: {
        navigation: NavigationModel,
        isActive?: boolean
    }) {

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isActive) setOpen(true);
    }, []);


    return (
        <>
            <div className={`relative flex flex-col w-full`}>
                <div className="flex fle-row">
                    <Link className={`${(isActive ? "bg-aztec-100" : "bg-transparent")} w-full pr-2 hover:bg-aztec`}
                        href={"/admin" + navigation.link}>
                        <div className="flex gap-3 w-full">
                            <div className="flex w-2">
                                {
                                    isActive ?
                                        <div className="w-2 bg-aztec-700 rounded-r-lg" />
                                        : <></>
                                }
                            </div>

                            <div className="flex gap-3 w-full items-center">
                                <span className={`${(!isActive ? "text-night-500" : "text-aztec-700 font-medium")} w-full text-start capitalize py-2`}>
                                    {
                                        navigation.title
                                    }
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
