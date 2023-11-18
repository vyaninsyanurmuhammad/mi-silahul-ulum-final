import { Link } from "@nextui-org/react";
import React from 'react'

export default function Footer() {
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
            <footer className="w-full bg-aztec-500 h-min text-night px-16 xl:px-64 py-8">
                <div className="flex flex-col md:flex-row w-full justify-center gap-6">
                    <div className="flex flex-col gap-3 w-full lg:w-80">
                        <div className="font-bold text-2xl">
                            MI SILAHUL ULUM
                        </div>
                        <p className="text-night-100 flex">
                            RT.01/RW.01, Desa. Asempapan, Kec. Trangkil, Kabupaten Pati, Jawa Tengah 59153
                        </p>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-center gap-8 w-full">
                        {
                            navigations.map((navigation) => (
                                <div key={navigation.judul} className="flex flex-col gap-3 capitalize">
                                    <div className="w-full">
                                        <Link href={navigation.link} className="w-fit text-xl font-semibold text-night">{navigation.judul}</Link>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {
                                            navigation.sub_navigation?.map((sub) => (
                                                <div key={sub.judul} className="w-full">
                                                    <Link href={sub.link} className="w-fit text-night-100">{sub.judul}</Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-3 w-full lg:w-80">
                        <span className="text-night">
                            Madrasah Ibtidaiyah Silahul Ulum berdiri dibawah naungan Yayaysan Silahul Ulum
                        </span>
                        <span className="text-night">
                            © Hak Cipta 2023 - MI silahul ulum
                        </span>
                    </div>

                </div>

            </footer>
        </>
    )
}
