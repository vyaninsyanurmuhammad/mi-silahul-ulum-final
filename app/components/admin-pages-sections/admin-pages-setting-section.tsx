'use client'

import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { transformData } from "@/app/utils/page-util";
import { Cog6ToothIcon, PencilIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Breadcrumbs, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react"
import { Input, link, Button as NextUIButton, } from "@nextui-org/react";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react'

export default function AdminPagesSettingSection({ isMainPage, titleRoute, route, subRoute }: { isMainPage: boolean, titleRoute: string, route: string, subRoute?: string }) {
    const adminPageState = useAppSelector((state) => state.adminReducer.pageState)

    const dispatch = useAppDispatch()

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')

    const linkConverter = (value: string) => {
        let linkConverted = value.toLowerCase().replace(/ /g, "")

        setTitle(value)
        setLink(linkConverted)
    }

    const handleOpen = () => setOpen(!open);

    useEffect(() => {
        linkConverter(titleRoute)
    }, [])

    return (
        <>
            <motion.div className="flex gap-2 bg-white shadow-xl rounded-b-xl p-4 justify-between"
                initial={{
                    y: -5,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    animation: "ease-in"
                }}
                transition={{
                    delay: 0.2
                }}

            >
                <Breadcrumbs>
                    <span className="opacity-50">{route}</span>
                    <span>{subRoute ?? ""}</span>
                </Breadcrumbs>

                <Menu placement="bottom-end">
                    <MenuHandler>
                        <IconButton variant="text" className={`group bg-aztec-200`}>
                            <Cog6ToothIcon className="w-5 h-5 text-night-600 group-hover:text-danger-500" />
                        </IconButton>
                    </MenuHandler>
                    <MenuList className="p-2 rounded-large">
                        <MenuItem className="flex gap-2 items-center" onClick={handleOpen}><PencilIcon className="w-5 h-5 text-night-600" /><span>Update</span></MenuItem>
                        {isMainPage ? <></>
                            : <MenuItem className="flex gap-2 items-center group hover:bg-red-300/20"><TrashIcon className="w-5 h-5 text-night-600 group-hover:text-danger" /><span className="flex-1 text-small font-normal group-hover:text-danger">Delete</span></MenuItem>

                        }
                    </MenuList>
                </Menu>

                <Dialog className="font-poppins" open={open} handler={handleOpen}>
                    <DialogHeader>
                        <></>
                    </DialogHeader>

                    <DialogBody className="w-full font-poppins">
                        <div className="flex flex-col gap-4">
                            <Input
                                type="text"
                                label="Title"
                                placeholder="type your title here ..."
                                required
                                isDisabled={adminPageState.addPageState.loading}
                                labelPlacement="outside"
                                value={title}
                                onValueChange={(value) => linkConverter(value)}
                            />

                            <Breadcrumbs>
                                <span>
                                    {
                                        (typeof window !== 'undefined') ? window.location.origin : ''
                                    }
                                </span>
                                {
                                    (route === "") ? null
                                        : <span>{route}</span>
                                }
                                <span>{link ?? ""}</span>

                            </Breadcrumbs>

                        </div>
                    </DialogBody>
                    <DialogFooter >
                        <div className="flex flex-row gap-3">
                            <NextUIButton color="danger" variant="light" onClick={handleOpen}>
                                Close
                            </NextUIButton>
                            <NextUIButton color="primary" isLoading={adminPageState.addSubPageState.loading}>
                                Save
                            </NextUIButton>
                        </div>

                    </DialogFooter>
                </Dialog>
            </motion.div>
        </>
    )
}
