export type RouteModel = {
    name: string
    link: string
    index?: number
}
export type HeroModel = {
    title?: string
    subTitle?: string
}

export type PageModel = {
    id?: string
    route: RouteModel
    hero: HeroModel
    content?: string
    sub_page?: PageModel[]
}