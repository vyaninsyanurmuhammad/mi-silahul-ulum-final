import { PageModel } from "../models/page-model"

export const sortPagesByIndexRoute = (pages: PageModel[]): PageModel[] => {
    return pages.slice().sort((a, b) => {
        if (a.route.index! < b.route.index!) return -1
        if (a.route.index! > b.route.index!) return 1

        return 0
    })
}

export const updatePageIndexRoute = (id: string, newIndex: number, oldPages: PageModel[]): PageModel[] => {
    const currentIndex = oldPages.findIndex(item => item.id === id);

    if (currentIndex === -1 || newIndex < 0 || newIndex >= oldPages.length) {
        return oldPages
    }

    const objectToMove = oldPages[currentIndex];

    const newPages = [...oldPages];

    newPages.splice(currentIndex, 1)
    newPages.splice(newIndex, 0, objectToMove)

    for (let i = 0; i < newPages.length; i++) {
        const updatedPage = { ...newPages[i], route: { ...newPages[i].route, index: i } }
        newPages[i] = updatedPage
    }

    return newPages
}

export const transformData = (pages: PageModel[], targetLink: string): PageModel[] => {
    let result: PageModel[] = []
    let currentPage: PageModel| undefined | null

    pages.forEach((page) => {
        if (page.route.link === targetLink) {
            result.push({ ...page, sub_page: [] } as PageModel)
            currentPage = page
        }
    })

    if (currentPage) {
        if (currentPage.sub_page) {
            currentPage.sub_page.forEach((subPage) => {
                result.push(subPage)
            })
        }
    }
    return result
}
