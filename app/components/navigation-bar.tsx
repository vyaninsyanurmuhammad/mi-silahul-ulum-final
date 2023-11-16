import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from "next/link";
import React from 'react'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function NavigationBar() {
    const navigations = [
        {
            judul: "tentang kami",
            link: "#",
            sub_navigation: [
                {
                    judul: "sejarah",
                    link: "#"
                },
                {
                    judul: "visi & misi",
                    link: "#"
                },
                {
                    judul: "sarana & prasarana",
                    link: "#"
                },
                {
                    judul: "kepala madrasah",
                    link: "#"
                },
                {
                    judul: "struktur madrasah",
                    link: "#"
                },
                {
                    judul: "pendidik",
                    link: "#"
                },
            ]
        },
        {
            judul: "pendidikan",
            link: "#",
            sub_navigation: [
                {
                    judul: "kurikulum",
                    link: "#"
                },
                {
                    judul: "prestasi madrasah",
                    link: "#"
                },
                {
                    judul: "seragam madrasah",
                    link: "#"
                },
            ]
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
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                <div className="flex flex-row bg-white pr-4 rounded-xl shadow-xl overflow-hidden">
                    <Link className="bg-slate-100 hover:bg-slate-200 px-7 py-7" href={"/"}>
                        <HomeIcon className="h-6 w-6 text-slate-800"></HomeIcon>

                    </Link>
                    <ul className="flex flex-row">
                        {navigations.map((navigation) =>
                            <li
                                key={navigation.judul}
                                className="group"
                            >
                                <div className="flex px-5 py-7 group-hover:bg-slate-100 ">
                                    <Link className="whitespace-nowrap capitalize" href={navigation.link} > {navigation.judul}</Link>
                                </div>
                                <div className="absolute hidden group-hover:block">
                                    <ul className="bg-gray-100 shadow-xl rounded-br-xl">
                                        {navigation.sub_navigation?.map((sub) => (
                                            <li key={sub.judul} className="px-5 py-5 hover:bg-slate-200 ">
                                                <Link href={navigation.link} className="capitalize">
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
        </>
    )
}
