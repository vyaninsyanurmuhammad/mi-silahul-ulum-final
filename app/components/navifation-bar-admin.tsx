'use client'

import { BookOpenIcon, Cog6ToothIcon, DocumentTextIcon, HomeIcon, IdentificationIcon, NewspaperIcon, PhotoIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Image, Link, User } from "@nextui-org/react"
import React from 'react'
import { NavigationsData } from "../models/navigation"
import { ArrowRightOnRectangleIcon, ChevronDownIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import NavigationDropdownAdmin from "./navigation-dropdown-admin"
import { usePathname } from "next/navigation"

export default function NavigationBar() {
    const navigations = NavigationsData;

    const patheNameRouter = usePathname();


    return (
        <>
            <div className="fixed w-72 h-full flex flex-col gap-2 bg-white py-6 justify-between">
                <div className="flex flex-col items-center gap-6 w-full h-full">
                    <Image className="w-12 h-12 shadow-xl border" src="logo-ysu.svg" />
                    <div className="flex flex-col w-full">
                        {navigations.map((navigation) => (
                            <div key={navigation.judul}>
                                <NavigationDropdownAdmin navigation={navigation}
                                    isHasDropdown={!(navigation.sub_navigation.length === 0) ? true : false}
                                    isActive={patheNameRouter + "/" === "/admin" + navigation.link ? true : false}
                                    isDropdown />

                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-4">
                    <Dropdown showArrow>
                        <DropdownTrigger>
                            <User
                                as="button"
                                avatarProps={{
                                    isBordered: true,
                                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                                }}
                                className="w-full flex justify-start transition-transform"
                                description="@tonyreichert"
                                name="Tony Reichert"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">

                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-bold">Signed in as</p>
                                <p className="font-bold">@tonyreichert</p>
                            </DropdownItem>
                            <DropdownItem
                                key="settings"
                                startContent={
                                    <Cog6ToothIcon className="w-5 h-5 text-night-800" />
                                }>
                                My Settings
                            </DropdownItem>

                            <DropdownItem
                                key="logout"
                                color="danger"
                                className="group"
                                startContent={
                                    <ArrowRightOnRectangleIcon className="group-hover:text-danger w-5 h-5 text-night-800" />
                                }>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

            </div>
        </>
    )
}
