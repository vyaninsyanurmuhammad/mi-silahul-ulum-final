export type NavigationModel = {
    title: string,
    link: string,
    sub_navigation: NavigationModel[]
}

export const NavigationsData: Array<NavigationModel> = [
    {
        title: "tentang kami",
        link: "/about/",
        sub_navigation: [
            {
                title: "sejarah",
                link: "/history/",
                sub_navigation: [
                    {
                        title: "visi & misi",
                        link: "/visimisi/",
                        sub_navigation: [],
                    },
                ],
            },
            {
                title: "visi & misi",
                link: "/visimisi/",
                sub_navigation: [],
            },
            {
                title: "sarana & prasarana",
                link: "/infrastucture/",
                sub_navigation: [],
            },
            {
                title: "kepala madrasah",
                link: "/principal/",
                sub_navigation: [],
            },
            {
                title: "struktur madrasah",
                link: "/structure/",
                sub_navigation: [],
            },
            {
                title: "pendidik",
                link: "/educator/",
                sub_navigation: [],
            },
        ]
    },
    {
        title: "pendidikan",
        link: "/education/",
        sub_navigation: [
            {
                title: "kurikulum",
                link: "/curriculum/",
                sub_navigation: [],
            },
            {
                title: "prestasi madrasah",
                link: "/achievements/",
                sub_navigation: [],
            },
            {
                title: "seragam madrasah",
                link: "/uniforms/",
                sub_navigation: [],
            },
        ]
    },
    {
        title: "berita & acara",
        link: "/",
        sub_navigation: [],
    },
    {
        title: "galeri",
        link: "/",
        sub_navigation: [],

    },
    {
        title: "PPDB",
        link: "/",
        sub_navigation: [],
    },
    {
        title: "kontak",
        link: "/",
        sub_navigation: [],
    },
];

