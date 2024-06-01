
import { firestore } from "@/app/firebase/firebaseConfig";
import { GalleryModel } from "@/app/models/gallery-model";
import { HeroModel, PageModel, RouteModel } from "@/app/models/page-model";
import { sortPagesByIndexRoute, transformData, updatePageIndexRoute } from "@/app/utils/page-util";
import { asyncThunkCreator, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { error } from "console";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, updateDoc } from "firebase/firestore";
import { title } from "process";


type InitialState = {
    adminReducer: AdminReducer
}

type AdminReducer = {
    pageState: PageState
    galleryState: GalleryState
}

type PageState = {
    loading: boolean
    success: StatusModel
    error: StatusModel
    pages: PageModel[]
    loadPageState: LoadPageState
    addPageState: AddPageState
    deletePageState: DeletePageState
    addSubPageState: AddSubPageState
    updateSubPageState: UpdateSubPageState
    pagesContentState: PagesContentState
    updateHeroPageState: UpdateHeroPageState
    updateContentPageState: UpdateContentPageState
}

type GalleryState = {
    gallery: GalleryModel[]

}

type LoadPageState = {
    loading: boolean
}

type AddPageState = {
    loading: boolean
}

type DeletePageState = {
    loading: boolean
}

type AddSubPageState = {
    loading: boolean
}
type UpdateSubPageState = {
    loading: boolean
}

type UpdateHeroPageState = {
    loading: boolean
}

type UpdateContentPageState = {
    loading: boolean
}

type StatusModel = {
    isOpen: boolean
    message?: string | null
}

type PagesContentState = {
    loading: boolean
    pages: PageModel[]
}

type AddGalleryState = {
    loading: boolean
}

const initialState = {
    pageState: {
        loading: true,
        pages: [],
        success: {
            isOpen: false,
            message: null
        },
        error: {
            isOpen: false,
            message: null
        },
        loadPageState: {
            loading: true,
        } as LoadPageState,
        addPageState: {
            loading: false,
        } as AddPageState,
        deletePageState: {
            loading: true,
        } as DeletePageState,
        addSubPageState: {
            loading: false,
        } as AddSubPageState,
        updateSubPageState: {
            loading: false,
        } as UpdateSubPageState,
        updateHeroPageState: {
            loading: false,
        } as UpdateHeroPageState,
        updateContentPageState: {
            loading: false,
        } as UpdateContentPageState,
        pagesContentState: {
            loading: true,
            pages: []
        } as PagesContentState,


    } as PageState,


    GalleryState: {
        gallery: []
    } as GalleryState
}

// thunk
export const addPage = createAsyncThunk(
    "admin/addPage", async (route: RouteModel) => {

        const newPage: PageModel = {
            route: route,
            hero: {
                title: route.name,
                subTitle: "Madrasah Ibtidaiyah Silahul Ulum"
            },
            content: "",
        }

        const dataSnapshot = await addDoc(collection(firestore, "Pages"), newPage)

        return { id: dataSnapshot.id, ...newPage, sub_page: [] } as PageModel
    }
)

export const fetchPages = createAsyncThunk(
    "admin/fetchPages", async () => {
        const dataSnapshot = await getDocs(collection(firestore, "Pages"))

        const data: PageModel[] = dataSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, sub_page: [] as PageModel[] }) as PageModel)

        const updatedData = await Promise.all(data.map(async (item) => {
            const subDataSnapshot = await getDocs(collection(firestore, "Pages", item.id!, "SubPage"))

            if (subDataSnapshot.docs) {
                const subData: PageModel[] = subDataSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, sub_page: [] as PageModel[] }) as PageModel)
                return { ...item, sub_page: [...subData] };
            }

            return item;
        }));

        return updatedData;
    }
)

export const deletePage = createAsyncThunk(
    "admin/deletePage", async (id: string, { getState }) => {

        const state = getState() as InitialState

        const dataSnapshot = await getDocs(collection(firestore, "Pages"))

        dataSnapshot.docs.forEach(async (data) => {
            if (id === data.id) {
                await deleteDoc(doc(firestore, "Pages", data.id))
            }
        })

        const pages = state.adminReducer.pageState.pages.filter(page => page.id !== id)

        return { id, result: pages }
    }
)

export const updateIndexPage = createAsyncThunk(
    "admin/updateIndexPage", async ({ id, newIndex }: { id: string, newIndex: number }, { getState }) => {

        const state = getState() as InitialState

        const newPage = updatePageIndexRoute(id, newIndex, state.adminReducer.pageState.pages)

        newPage.forEach(async (data) => {
            await updateDoc(doc(firestore, "Pages", data.id!), {
                route: data.route,
                hero: data.hero,
                content: data.content
            })
        })

        return { id, pages: newPage }
    }
)

export const addSubPage = createAsyncThunk(
    "admin/addSubPage", async ({ id, route }: { id: string, route: RouteModel }, { getState }) => {
        const newPage = {
            route: route,
            hero: {
                title: route.name,
                subTitle: "Madrasah Ibtidaiyah Silahhul Ulum"
            },
            content: "",
        }

        const state = getState() as InitialState

        const dataSnapshot = await addDoc(collection(firestore, "Pages", id, "SubPage"), newPage)

        const newPages = [...state.adminReducer.pageState.pages]

        const resultPages = newPages.map((page) => {
            if (id === page.id) {
                let newSubPages: PageModel[]

                if (page.sub_page) {
                    newSubPages = [...page.sub_page!, { id: dataSnapshot.id, ...newPage }]
                } else {
                    newSubPages = [{ id: dataSnapshot.id, ...newPage }]
                }

                return { ...page, sub_page: newSubPages } as PageModel
            }
            return page
        })

        return { route, pages: resultPages }
    }
)

export const updatePageHero = createAsyncThunk(
    "admin/updatePageHero", async ({ id, hero }: { id: string, hero: HeroModel }, { getState }) => {

        const state = getState() as InitialState

        const newPages = [...state.adminReducer.pageState.pages]

        const resultPages = newPages.map((page) => {


            if (page.id === id) {
                const updatePage = {
                    ...page,
                    hero,
                }
                return updatePage
            }
            return page
        })

        const updatePage: PageModel | undefined = resultPages.find((page) => page.id === id)

        if (updatePage) {
            await updateDoc(doc(firestore, "Pages", id), updatePage)

        }

        return { id, pages: resultPages }
    }
)

export const updatePageContent = createAsyncThunk(
    "admin/updatePageContent", async ({ id, content }: { id: string, content: string }, { getState }) => {

        const state = getState() as InitialState

        const newPages = [...state.adminReducer.pageState.pages]

        const resultPages = newPages.map((page) => {


            if (page.id === id) {
                const updatePage = {
                    ...page,
                    content,
                }
                return updatePage
            }
            return page
        })


        const updatePage: PageModel | undefined = resultPages.find((page) => page.id === id)

        if (updatePage) {
            await updateDoc(doc(firestore, "Pages", id), updatePage)

        }

        return { id, pages: resultPages }
    }
)

export const updateSubPageHero = createAsyncThunk(
    "admin/updateSubPageHero", async ({ id, subId, hero }: { id: string, subId: string, hero: HeroModel }, { getState }) => {

        const state = getState() as InitialState

        const newPages: PageModel[] = JSON.parse(JSON.stringify(state.adminReducer.pageState.pages))

        const resultPages = newPages.map((page) => {

            if (page.sub_page) {
                page.sub_page = page.sub_page.map((subpage) => {
                    if (subpage.id === subId) {
                        return {
                            ...subpage,
                            hero,
                        }
                    }
                    return subpage
                })
            }

            return page
        })

        const updatePage: PageModel | undefined = resultPages.find((page) => page.id === id)?.sub_page?.find((page) => page.id === subId)

        if (updatePage) {
            await updateDoc(doc(firestore, "Pages", id, "SubPage", subId), updatePage)

        }

        return { id, pages: resultPages }
    }
)

export const updateSubPageContent = createAsyncThunk(
    "admin/updateSubPageContent", async ({ id, subId, content }: { id: string, subId: string, content: string }, { getState }) => {

        const state = getState() as InitialState


        const newPages: PageModel[] = JSON.parse(JSON.stringify(state.adminReducer.pageState.pages))

        const resultPages = newPages.map((page) => {

            if (page.sub_page) {
                page.sub_page = page.sub_page.map((subpage) => {
                    if (subpage.id === subId) {
                        return {
                            ...subpage,
                            content,
                        }
                    }
                    return subpage
                })
            }

            return page
        })

        const updatePage: PageModel | undefined = resultPages.find((page) => page.id === id)?.sub_page?.find((page) => page.id === subId)

        if (updatePage) {
            await updateDoc(doc(firestore, "Pages", id, "SubPage", subId), updatePage)

        }

        return { id, pages: resultPages }
    }
)

const adminSlice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {
        resetPageSuccess: (state) => {
            state.pageState.success = { isOpen: false, message: null }
        },
        resetPageError: (state) => {
            state.pageState.error = { isOpen: false, message: null }
        },
        changePageLoading: (state, action) => {
            state.pageState.loading = action.payload
        },
        setPages: (state, action) => {
            state.pageState.pages = action.payload
        }

    },

    extraReducers(builder) {
        // add page
        builder.addCase(addPage.pending, (state) => {
            state.pageState.addPageState.loading = true
        })
        builder.addCase(addPage.fulfilled, (state, action) => {
            state.pageState.addPageState.loading = false
            state.pageState.pages.push(action.payload)
            state.pageState.success = { isOpen: true, message: `Add ${action.payload.route.name} Page Success` }

        })
        builder.addCase(addPage.rejected, (state, action) => {
            state.pageState.addPageState.loading = false
            state.pageState.error = { isOpen: true, message: action.error.message }
        })

        // fetch pages
        builder.addCase(fetchPages.pending, (state) => {
            state.pageState.loading = true
            state.pageState.loadPageState.loading = true
        })
        builder.addCase(fetchPages.fulfilled, (state, action) => {
            state.pageState.loading = false
            state.pageState.loadPageState.loading = false
            state.pageState.pages = sortPagesByIndexRoute(action.payload)
        })
        builder.addCase(fetchPages.rejected, (state, action) => {
            state.pageState.loading = false
            state.pageState.loadPageState.loading = false
            state.pageState.error = { isOpen: true, message: action.error.message }
        })

        // delete page
        builder.addCase(deletePage.pending, (state) => {
            state.pageState.loadPageState.loading = true
            state.pageState.deletePageState.loading = true
        })
        builder.addCase(deletePage.fulfilled, (state, action) => {
            state.pageState.loadPageState.loading = false
            state.pageState.deletePageState.loading = false
            state.pageState.pages = action.payload.result
            state.pageState.success = { isOpen: true, message: `Delete ${action.payload.id} Page Success` }

        })
        builder.addCase(deletePage.rejected, (state, action) => {
            state.pageState.loadPageState.loading = false
            state.pageState.deletePageState.loading = false
            state.pageState.error = { isOpen: true, message: action.error.message }
        })

        // update index page
        builder.addCase(updateIndexPage.pending, (state) => {

        })
        builder.addCase(updateIndexPage.fulfilled, (state, action) => {
            state.pageState.pages = action.payload.pages
            state.pageState.success = { isOpen: true, message: `Update Index ${action.payload.id} Page Success` }

        })
        builder.addCase(updateIndexPage.rejected, (state, action) => {
            state.pageState.error = { isOpen: true, message: action.error.message }
        })

        // add sub page
        builder.addCase(addSubPage.pending, (state) => {
            state.pageState.addSubPageState.loading = true
        })
        builder.addCase(addSubPage.fulfilled, (state, action) => {
            state.pageState.addSubPageState.loading = false
            state.pageState.pages = action.payload.pages
            state.pageState.success = { isOpen: true, message: `Add ${action.payload.route.name} Sub Page Success` }

        })
        builder.addCase(addSubPage.rejected, (state, action) => {
            state.pageState.addSubPageState.loading = false
            state.pageState.error = { isOpen: true, message: action.error.message }
        })

        // update hero page
        builder.addCase(updatePageHero.pending, (state) => {
            state.pageState.updateHeroPageState.loading = true
        })
        builder.addCase(updatePageHero.fulfilled, (state, action) => {
            state.pageState.updateHeroPageState.loading = false
            state.pageState.pages = action.payload.pages
            state.pageState.success = { isOpen: true, message: `Update Hero ${action.payload.id} Page Success` }

        })
        builder.addCase(updatePageHero.rejected, (state, action) => {
            state.pageState.updateHeroPageState.loading = false
            state.pageState.error = { isOpen: true, message: action.error.message }
        })

        // update content page
        builder.addCase(updatePageContent.pending, (state) => {
            state.pageState.updateHeroPageState.loading = true
        })
        builder.addCase(updatePageContent.fulfilled, (state, action) => {
            state.pageState.updateContentPageState.loading = false
            state.pageState.pages = action.payload.pages
            state.pageState.success = { isOpen: true, message: `Update Content ${action.payload.id} Page Success` }

        })
        builder.addCase(updatePageContent.rejected, (state, action) => {
            state.pageState.updateContentPageState.loading = false
            state.pageState.error = { isOpen: true, message: action.error.message }
        })

        // update hero subpage
        builder.addCase(updateSubPageHero.pending, (state) => {
            state.pageState.updateHeroPageState.loading = true
        })
        builder.addCase(updateSubPageHero.fulfilled, (state, action) => {
            state.pageState.updateHeroPageState.loading = false
            state.pageState.pages = action.payload.pages
            state.pageState.success = { isOpen: true, message: `Update Hero ${action.payload.id} Subpage Success` }

        })
        builder.addCase(updateSubPageHero.rejected, (state, action) => {
            state.pageState.updateHeroPageState.loading = false
            state.pageState.error = { isOpen: true, message: action.error.message }
        })

        // update content subpage
        builder.addCase(updateSubPageContent.pending, (state) => {
            state.pageState.updateHeroPageState.loading = true
        })
        builder.addCase(updateSubPageContent.fulfilled, (state, action) => {
            state.pageState.updateContentPageState.loading = false
            state.pageState.pages = action.payload.pages
            state.pageState.success = { isOpen: true, message: `Update Content ${action.payload.id} Subpage Success` }

        })
        builder.addCase(updateSubPageContent.rejected, (state, action) => {
            state.pageState.updateContentPageState.loading = false
            state.pageState.error = { isOpen: true, message: action.error.message }
        })
    },
})

export const { resetPageSuccess, resetPageError, changePageLoading } = adminSlice.actions

export default adminSlice.reducer