'use client'

import React, { useEffect, useState } from 'react'
import { NavigationModel } from "../models/navigation";
import { Button, Link } from "@nextui-org/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";

export default function NavigationDropdownAdmin(
    {
        navigation,
        isDropdown = false,
        isHasDropdown = false,
        isActive = false
    }: {
        navigation: NavigationModel,
        isDropdown?: boolean,
        isHasDropdown?: boolean,
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
                                    isDropdown ?
                                        isActive ?
                                            <div className="w-2 bg-aztec-700 rounded-r-lg" />
                                            : <></>
                                        : <></>
                                }
                            </div>

                            <div className="flex gap-3 w-full items-center">
                                <span className={`${(!isActive ? "text-night-500" : "text-aztec-700 font-medium")} w-full text-start capitalize py-2`}>
                                    {
                                        navigation.judul
                                    }
                                </span>

                            </div>
                        </div>
                    </Link>
                    {
                        isHasDropdown ?
                            <Link className={`${(isOpen ? "bg-aztec-100" : "bg-transparent")} px-4 hover:bg-aztec`}
                                onClick={() => isOpen ? setOpen(false) : setOpen(true)}
                            >
                                {
                                    isDropdown ?
                                        isOpen ?
                                            <MinusSmallIcon className={`${(!isOpen ? "text-night-500" : "text-aztec-700")} w-5 h-5`} />
                                            : <PlusSmallIcon className={`${(!isOpen ? "text-night-500" : "text-aztec-700")} w-5 h-5`} />
                                        : <></>
                                }
                            </Link>
                            : <></>
                    }

                </div>
                {
                    isOpen ?
                        !(navigation.sub_navigation.length === 0) ?
                            <div className="flex flex-col pt-3 pb-6">
                                {
                                    navigation.sub_navigation.map((sub) => (
                                        <div key={sub.judul} className="ml-3">
                                            <NavigationDropdownAdmin navigation={sub} />

                                        </div>
                                    ))
                                }
                            </div>
                            : <></>
                        : <></>
                }
            </div>

        </>
    )
}
