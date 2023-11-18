'use client'

import { Button, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { Bars2Icon, Bars3Icon, HomeIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import NavigationMenuMobile from "./navigation-menu-mobile";
import { NavigationModel } from "../models/navigation";

export default function NavigationBar() {
    const navigations:Array<NavigationModel> =  [
        {
            judul: "tentang kami",
            link: "#",
            sub_navigation: [
                {
                    judul: "sejarah",
                    link: "#",
                    sub_navigation: [],
                },
                {
                    judul: "visi & misi",
                    link: "#",
                    sub_navigation: [],
                },
                {
                    judul: "sarana & prasarana",
                    link: "#",
                    sub_navigation: [],
                },
                {
                    judul: "kepala madrasah",
                    link: "#",
                    sub_navigation: [],
                },
                {
                    judul: "struktur madrasah",
                    link: "#",
                    sub_navigation: [],
                },
                {
                    judul: "pendidik",
                    link: "#",
                    sub_navigation: [],
                },
            ]
        },
        {
            judul: "pendidikan",
            link: "#",
            sub_navigation: [
                {
                    judul: "kurikulum",
                    link: "#",
                    sub_navigation: [],
                },
                {
                    judul: "prestasi madrasah",
                    link: "#",
                    sub_navigation: [],
                },
                {
                    judul: "seragam madrasah",
                    link: "#",
                    sub_navigation: [],
                },
            ]
        },
        {
            judul: "berita & acara",
            link: "#",
            sub_navigation: [],
        },
        {
            judul: "galeri",
            link: "#",
            sub_navigation: [],

        },
        {
            judul: "PPDB",
            link: "#",
            sub_navigation: [],
        },
        {
            judul: "kontak",
            link: "#",
            sub_navigation: [],
        },
    ];

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <div className="hidden lg:block fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                <div className="flex flex-row bg-white pr-4 rounded-xl shadow-xl overflow-hidden">
                    <Link className="bg-slate-100 hover:bg-slate-200 px-7 py-7 text-night-800" href={"/"}>
                        <HomeIcon className="h-6 w-6 text-night-800"></HomeIcon>

                    </Link>
                    <ul className="flex flex-row">
                        {navigations.map((navigation) =>
                            <li
                                key={navigation.judul}
                                className="group"
                            >
                                <div className="flex group-hover:bg-slate-100 ">
                                    <Link className="px-5 py-7 whitespace-nowrap capitalize text-night-800" href={navigation.link} > {navigation.judul}</Link>
                                </div>
                                <div className="absolute hidden group-hover:block">
                                    <ul className="bg-gray-100 shadow-xl rounded-br-xl">
                                        {navigation.sub_navigation?.map((sub) => (
                                            <li key={sub.judul} className="hover:bg-slate-200 ">
                                                <Link href={navigation.link} className="w-full px-5 py-5 capitalize text-night-800">
                                                    {sub.judul}

                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Navbar Mobile Responsive */}
            <div className="block lg:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                <div className="flex flex-row bg-white pr-4 rounded-xl shadow-xl overflow-hidden">
                    <Link className="bg-slate-100 hover:bg-slate-200 px-7 py-7" href={"/"}>
                        <HomeIcon className="h-6 w-6 text-night-800"></HomeIcon>

                    </Link>
                    <Link className="bg-slate-100 hover:bg-slate-200 px-7 py-7" onClick={onOpen}>
                        <Bars3Icon className="h-6 w-6 text-night-800"></Bars3Icon>

                    </Link>

                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement={"top"} size="5xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader ></ModalHeader>
                            <ModalBody>
                                <ul className="flex flex-col">
                                    {navigations.map((navigation) =>
                                        <li
                                            key={navigation.judul}
                                            className="group"
                                        >
                                            <NavigationMenuMobile navigation={navigation} />
                                        </li>
                                    )}
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
