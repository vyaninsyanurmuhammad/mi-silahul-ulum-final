'use client'

import React, { MouseEventHandler, useEffect, useState } from 'react'
import { NavigationModel } from "../models/navigation-model";
import { Button } from "@nextui-org/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import { RouteModel } from "../models/page-model";
import { ArrowDownIcon, ArrowUpIcon, EllipsisVerticalIcon, PencilIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";

export default function NavigationDropdownAdmin(
    {
        navigation,
        isActive = false,
        isDynamicPage = false,
        onDeleteClick,
        onUpClick,
        onDownClick,
        isUpButtonDisabled,
        isDownButtonDisabled,
    }: {
        navigation: RouteModel,
        isActive?: boolean,
        isDynamicPage?: boolean,
        onDeleteClick?: MouseEventHandler<HTMLButtonElement>,
        onUpClick?: MouseEventHandler<HTMLButtonElement>,
        onDownClick?: MouseEventHandler<HTMLButtonElement>,
        isUpButtonDisabled?: boolean,
        isDownButtonDisabled?: boolean,
    }) {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className={`group relative flex flex-col w-full`}>
                <div className={`${(isActive ? "bg-aztec-100" : "bg-transparent")} flex fle-row hover:bg-aztec w-full overflow-hidden`}>
                    <Link className={`w-full pr-2 overflow-hidden`} shallow
                        href={`/admin/${navigation.link}`}>
                        <div className="flex gap-3 w-full">
                            <div className="flex w-2">
                                {
                                    isActive ?
                                        <motion.div className="w-2 bg-aztec-700 rounded-r-lg"
                                            animate={{
                                                x: 0
                                            }}
                                            transition={{
                                                ease: "easeIn"
                                            }}
                                            initial={{
                                                x: -10
                                            }}
                                        />
                                        : <></>
                                }
                            </div>

                            <div className="flex gap-3 w-full items-center">
                                <span className={`${(!isActive ? "text-night-500" : "text-aztec-700 font-medium")} ${isOpen ? "w-24" : "w-fit"} text-start capitalize py-2 truncate`}>
                                    {
                                        navigation.name
                                    }
                                </span>
                            </div>

                        </div>
                    </Link>
                    {
                        isDynamicPage ? (
                            <div className={`flex w-fit ${isOpen ? "rounded-lg bg-aztec-100 " : ""}`}>
                                {
                                    isOpen ?
                                        (
                                            <motion.div className="absolute py-1 right-9 flex gap-1 pl-1 pr-3"
                                                animate={{
                                                    x: 0,
                                                    opacity: 1
                                                }}
                                                initial={{
                                                    x: -5,
                                                    opacity: 0
                                                }}
                                            >

                                                <IconButton size="sm" variant="text" disabled={isUpButtonDisabled} className="bg-transparent" onClick={onUpClick!}>
                                                    <ArrowUpIcon className="w-5 h-5 text-night-600 hover:text-aztec-500" />
                                                </IconButton>
                                                <IconButton size="sm" variant="text" disabled={isDownButtonDisabled} className="bg-transparent" onClick={onDownClick!}>
                                                    <ArrowDownIcon className="w-5 h-5 text-night-600 hover:text-aztec-500" />
                                                </IconButton>

                                                <IconButton size="sm" variant="text" className="bg-transparent" onClick={onDeleteClick!}>
                                                    <TrashIcon className="w-5 h-5 text-night-600 hover:text-danger-500" />
                                                </IconButton>
                                            </motion.div>
                                        )
                                        : <></>
                                }


                                <IconButton variant="text" className={`${isOpen ? "bg-aztec-200" : ""}`}>
                                    {
                                        isOpen
                                            ? <XMarkIcon className="w-5 h-5 text-night-800" onClick={() => setOpen(!isOpen)} />
                                            : <EllipsisVerticalIcon className="w-5 h-5 text-night-800" onClick={() => setOpen(!isOpen)} />
                                    }
                                </IconButton>
                            </div>


                            // <div className="justify-center items-center h-full hidden group-hover:flex transition pr-2">
                            //     <Button isIconOnly className="bg-transparent" onClick={onEditClick!}>
                            //         <PencilIcon className="w-5 h-5 text-night-600 hover:text-success-500" />
                            //     </Button>
                            //     <Button isIconOnly className="bg-transparent" onClick={onDeleteClick!}>
                            //         <TrashIcon className="w-5 h-5 text-night-600 hover:text-danger-500" />
                            //     </Button>
                            // </div>
                        ) : <></>
                    }

                </div>
            </div>
        </>
    )
}
