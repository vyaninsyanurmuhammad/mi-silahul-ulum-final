export type NavigationModel = {
    judul: string,
    link: string,
    sub_navigation: NavigationModel[]
}

export const NavigationsData: Array<NavigationModel> = [
    {
        judul: "beranda",
        link: "/",
        sub_navigation: []
    },
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

