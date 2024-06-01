'use client'

import { BookOpenIcon, Cog6ToothIcon, DocumentTextIcon, HomeIcon, HomeModernIcon, IdentificationIcon, InformationCircleIcon, NewspaperIcon, PhotoIcon, PlusCircleIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import { Avatar, Button, CircularProgress, Divider, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Input, Link, Progress, ScrollShadow, User, useDisclosure } from "@nextui-org/react"
import React, { useEffect, useState } from 'react'
import { NavigationModel, NavigationsData } from "../models/navigation-model"
import { ArrowRightOnRectangleIcon, ChevronDownIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid"
import NavigationDropdownAdmin from "./navigation-dropdown-admin"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import ModelAdmin from "./admin-modal/modal-admin"
import { Alert, Breadcrumbs, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from "@material-tailwind/react"
import { auth, firestore } from "../firebase/firebaseConfig"
import { signOut } from "next-auth/react"
import { addDoc, collection } from "firebase/firestore"
import { PageModel } from "../models/page-model"
import { useAppDispatch, useAppSelector } from "../redux/hook"
import { addPage, deletePage, fetchPages, resetPageError, resetPageSuccess, updateIndexPage } from "../redux/feature/admin-slice"

export default function NavigationBar() {

    const patheNameRouter = usePathname()
    const dispatch = useAppDispatch()
    const router = useRouter()

    const adminPageState = useAppSelector((state) => state.adminReducer.pageState)

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')

    const linkConverter = (value: string) => {
        let linkConverted = value.toLowerCase().replace(" ", "")

        setTitle(value)
        setLink(linkConverted)
    }

    const addPageToFirestore = () => {
        dispatch(addPage({
            index: adminPageState.pages.length,
            name: title,
            link
        }))

        setTitle("")
        setLink("")

        handleOpen()

        router.push(`/admin/${link}`)
    }

    const deletePageFromFirestore = (id: string) => {
        dispatch(deletePage(id))
    }

    const handleOpen = () => setOpen(!open);

    const handleSignOut = async () => {
        await auth.signOut()
        await signOut()
    }


    return (
        <>
           
            <div className="fixed w-72 h-full flex flex-col gap-2 bg-white py-6 justify-between border-r-1 z-50">
                <ScrollShadow>

                    <div className="flex flex-col items-center gap-6 w-full h-full">

                        <Image className="w-12 h-12 shadow-xl border" src="/logo-ysu.svg" alt={""} height={48} width={48} />
                        <div className="flex flex-col w-full">
                            <NavigationDropdownAdmin navigation={{
                                name: "Beranda",
                                link: "beranda",
                            }}
                                isActive={patheNameRouter === "/admin/beranda/" ? true : false}
                            />
                        </div>
                        <div className="flex flex-col gap-3 w-full ">

                            <div className="flex flex-row justify-center items-center px-3 gap-2 w-full text-night-700">
                                <span className="w-fit text-xs font-semibold uppercase">Pages</span>
                                <Divider orientation="horizontal" className="shrink" />
                            </div>


                            <div className="flex flex-col w-full">

                                {adminPageState.loadPageState.loading === true ?
                                    <Progress
                                        size="sm"
                                        isIndeterminate
                                        aria-label="Loading..."
                                        color="default"
                                        className="max-w-md px-4" />
                                    : adminPageState.pages.length === 0 ?
                                        <div className="w-full flex justify-center">
                                            <span className="text-xs"> Tidak ada data pages</span>
                                        </div>
                                        : adminPageState.pages.map((navigation) => (
                                            <NavigationDropdownAdmin
                                                key={navigation.route.link}
                                                navigation={navigation.route}
                                                isDynamicPage
                                                onDeleteClick={() => deletePageFromFirestore(navigation.id!)}
                                                isUpButtonDisabled={(navigation.route.index === 0)}
                                                isDownButtonDisabled={(navigation.route.index! + 1 === adminPageState.pages.length)}
                                                onUpClick={() => dispatch(updateIndexPage({ id: navigation.id!, newIndex: navigation.route.index! - 1 }))}
                                                onDownClick={() => dispatch(updateIndexPage({ id: navigation.id!, newIndex: navigation.route.index! + 1 }))}
                                                isActive={patheNameRouter === "/admin/" + navigation.route.link + "/" ? true : false}
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
                                            required
                                            isDisabled={adminPageState.addPageState.loading}
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
                                        <Button color="primary" onClick={addPageToFirestore} isLoading={adminPageState.addPageState.loading}>
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
                                    name: "Berita",
                                    link: "berita",
                                }}
                                    isActive={patheNameRouter === "/admin/berita/" ? true : false}
                                />

                                <NavigationDropdownAdmin navigation={{
                                    name: "Galeri",
                                    link: "galeri",
                                }}
                                    isActive={patheNameRouter == "/admin/galeri/" ? true : false}
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
