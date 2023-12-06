'use client'

import { BookOpenIcon, Cog6ToothIcon, DocumentTextIcon, HomeIcon, HomeModernIcon, IdentificationIcon, NewspaperIcon, PhotoIcon, PlusCircleIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Avatar, Button, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Input, Link, ScrollShadow, User, useDisclosure } from "@nextui-org/react"
import React, { useEffect, useState } from 'react'
import { NavigationModel, NavigationsData } from "../models/navigation"
import { ArrowRightOnRectangleIcon, ChevronDownIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import NavigationDropdownAdmin from "./navigation-dropdown-admin"
import { usePathname } from "next/navigation"
import Image from "next/image"
import ModelAdmin from "./admin-modal/modal-admin"
import { Breadcrumbs, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react"
import { auth } from "../firebase/firebaseConfig"
import { signOut } from "next-auth/react"

export default function NavigationBar() {

    const patheNameRouter = usePathname();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');


    const [navigations, setNavigations] = useState<NavigationModel[]>([])


    const getNavigations = async () => {
        try {

        } catch (error) {
            console.error('Error fetching navigations:', error)
        }
    };

    const linkConverter = (value: string) => {
        let link = value.toLowerCase().replace(" ", "")

        setTitle(value)
        setLink(link)
    }

    const handleOpen = () => setOpen(!open);

    const handleSignOut = async () => {
        await auth.signOut()
        await signOut()
    }

    useEffect(() => {
        getNavigations();
    }, []);


    return (
        <>
            <div className="fixed w-72 h-full flex flex-col gap-2 bg-white py-6 justify-between border-r-1 z-40">
                <ScrollShadow>

                    <div className="flex flex-col items-center gap-6 w-full h-full">

                        <Image className="w-12 h-12 shadow-xl border" src="/logo-ysu.svg" alt={""} height={48} width={48} />
                        <div className="flex flex-col w-full">
                            <NavigationDropdownAdmin navigation={{
                                title: "Beranda",
                                link: "/",
                                sub_navigation: []
                            }}
                                isActive={patheNameRouter === "/admin/" ? true : false}
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full ">

                            <div className="flex flex-row justify-center items-center px-3 gap-2 w-full text-night-700">
                                <span className="w-fit text-xs font-semibold uppercase">Pages</span>
                                <Divider orientation="horizontal" className="shrink" />
                            </div>

                            <div className="flex flex-col w-full">

                                {navigations?.map((navigation) => (
                                    <NavigationDropdownAdmin
                                        key={navigation.title}
                                        navigation={navigation}
                                        isActive={patheNameRouter === "/admin" + navigation.link ? true : false}
                                    />

                                ))}
                            </div>

                            <div className="px-3 w-full">
                                <Button className="w-full bg-aztec-500 text-night rounded-md" onClick={handleOpen}>
                                    <PlusIcon className="w-5 h-5" /><span>Add a Page</span>
                                </Button>
                            </div>
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
                                            labelPlacement="outside"
                                            onValueChange={(value) => linkConverter(value)}
                                        />

                                        <Breadcrumbs>
                                            <span>
                                                {
                                                    (typeof window !== 'undefined') ? window.location.origin : ''
                                                }
                                            </span>
                                            <span>
                                                {
                                                    link
                                                }
                                            </span>
                                        </Breadcrumbs>

                                    </div>
                                </DialogBody>
                                <DialogFooter >
                                    <div className="flex flex-row gap-3">
                                        <Button color="danger" variant="light" onClick={handleOpen}>
                                            Close
                                        </Button>
                                        <Button color="primary" onClick={handleOpen}>
                                            Save
                                        </Button>
                                    </div>

                                </DialogFooter>
                            </Dialog>

                        </div>

                        <div className="flex flex-col gap-3 w-full ">

                            <div className="flex flex-row justify-center items-center px-3 gap-2 w-full text-night-700">
                                <span className="w-fit text-xs font-semibold uppercase">Others</span>
                                <Divider orientation="horizontal" className="shrink" />
                            </div>
                            <div className="flex flex-col w-full">
                                <NavigationDropdownAdmin navigation={{
                                    title: "News",
                                    link: "/news",
                                    sub_navigation: []
                                }}
                                    isActive={patheNameRouter === "/admin/news/" ? true : false}
                                />

                                <NavigationDropdownAdmin navigation={{
                                    title: "Gallery",
                                    link: "/gallery",
                                    sub_navigation: []
                                }}
                                    isActive={patheNameRouter == "/admin/gallery/" ? true : false}
                                />

                            </div>
                        </div>

                    </div>
                </ScrollShadow>

                <div className="px-4">
                    <Dropdown showArrow >
                        <DropdownTrigger>
                            <div className="bg-aztec-100 rounded-lg p-3">
                                <User
                                    as="button"
                                    avatarProps={{
                                        isBordered: true,
                                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                                    }}
                                    className="w-full flex justify-start transition-transform "
                                    description={<span className="text-night-700">admin.ysu@mail.com</span>}
                                    name={<span className="font-semibold text-base text-night-800">Admin</span>}
                                />
                            </div>

                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">

                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-bold">Signed in sebagai</p>
                                <p className="font-bold">admin.ysu@mail.com</p>
                            </DropdownItem>
                            <DropdownItem
                                key="settings"
                                startContent={
                                    <Cog6ToothIcon className="w-5 h-5 text-night-800" />
                                }>
                                Pengaturan
                            </DropdownItem>

                            <DropdownItem
                                key="logout"
                                color="danger"
                                className="group"
                                onClick={handleSignOut}
                                startContent={
                                    <ArrowRightOnRectangleIcon className="group-hover:text-danger w-5 h-5 text-night-800" />
                                }>
                                Sign Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

            </div>
        </>
    )
}
