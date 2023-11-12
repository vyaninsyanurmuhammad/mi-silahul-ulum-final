import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from "next/link";
import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function NavigationBar() {
    const navigations = [
        {
            judul: "tentang kami",
            link: "#",
        },
        {
            judul: "pendidikan",
            link: "#",
        },
        {
            judul: "berita & acara",
            link: "#",
        },
        {
            judul: "galeri",
            link: "#",
        },
        {
            judul: "PPDB",
            link: "#",
        },
        {
            judul: "kontak",
            link: "#",
        },
    ];

    return (
        <>
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex flex-row bg-white pr-4 rounded-xl shadow-xl overflow-hidden">
                    <Link className="bg-slate-100 hover:bg-slate-200 px-7 py-7" href={"/"}>
                        <HomeIcon className="h-6 w-6 text-slate-800"></HomeIcon>

                    </Link>
                    <ul className="flex flex-row">
                        {navigations.map((navigation) =>
                            <li
                                key={navigation.judul}
                                className="flex"
                            >
                                <Link className="whitespace-nowrap px-5 py-7 capitalize hover:bg-slate-50" href={navigation.link} > {navigation.judul}</Link>

                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
