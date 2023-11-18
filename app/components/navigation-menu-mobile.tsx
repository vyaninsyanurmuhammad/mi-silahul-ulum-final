import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "@nextui-org/react";
import React, { useState } from 'react'
import { NavigationModel } from "../models/navigation";

export default function NavigationMenuMobile({ navigation }: { navigation: NavigationModel }) {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div>
                <div className="w-full flex group-hover:bg-slate-100 justify-between items-center" onClick={() => isOpen ? setOpen(false) : setOpen(true)}>
                    <Link className="px-5 py-7 whitespace-nowrap capitalize text-night-800" href={navigation.link}> {navigation.judul}</Link>
                    {navigation.sub_navigation?.length === 0 ?
                        (
                            <></>
                        ) : (
                            <>
                                {!isOpen ? (
                                    <ChevronLeftIcon className="mr-7 h-6 w-6 text-night-800"></ChevronLeftIcon>
                                ) : (
                                    <ChevronDownIcon className="mr-7 h-6 w-6 text-night-800"></ChevronDownIcon>
                                )
                                }
                            </>
                        )
                    }
                </div>
                <div className={isOpen ? "block" : "hidden"}>
                    <ul className="bg-slate-100 shadow-xl rounded-b-xl">
                        {navigation.sub_navigation?.map((sub) => (
                            <li key={sub.judul} className=" hover:bg-slate-200 ">
                                <Link href={navigation.link} className="w-full px-5 py-5 capitalize text-night-800">
                                    {sub.judul}

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}