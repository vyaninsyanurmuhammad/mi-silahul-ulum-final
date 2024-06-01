'use client'

import React, { Fragment, ReactNode, useEffect, useState } from 'react'
import SlidebarAdmin from "../components/navigation-bar-admin"
import { Button } from "@nextui-org/react"
import { Alert, Drawer } from "@material-tailwind/react"
import { Bars3BottomLeftIcon, InformationCircleIcon } from "@heroicons/react/24/outline"
import { useAppDispatch, useAppSelector } from "../redux/hook"
import { fetchPages, resetPageError, resetPageSuccess } from "../redux/feature/admin-slice"

export default function Adminlayout({ children }: { children: ReactNode }) {

    const dispatch = useAppDispatch()

    const adminPageState = useAppSelector((state) => state.adminReducer.pageState)

    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const onOpenDrawer = () => setDrawerOpen(true)
    const onCLoseDrawer = () => setDrawerOpen(false)
    const handleFetchPage = () => {
        if (adminPageState.loadPageState.loading) dispatch(fetchPages())

    }
    const handleResetAlert = () => {
        if (adminPageState.success.isOpen === true || adminPageState.error.isOpen === true) {
            dispatch(resetPageSuccess())
            dispatch(resetPageError())
        }
    }

    useEffect(() => {
        handleFetchPage()

        const closeAlertTimeout = setTimeout(() => {
            handleResetAlert()
        }, 2000)

        return () => clearTimeout(closeAlertTimeout)

    }, [handleFetchPage, handleResetAlert])

    return (
        <>
            <div className="fixed z-50 left-1/2 top-4 transform -translate-x-1/2">
                <Alert className={`${adminPageState.success.isOpen ? 'bg-green-700' : adminPageState.error.isOpen ? 'bg-red-700' : ''} max-w-screen-md`}
                    icon={<InformationCircleIcon className="w-6 h-6 text-white" />}
                    open={adminPageState.success.isOpen || adminPageState.error.isOpen}
                    onClose={() => dispatch(resetPageSuccess())}
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 100 },
                    }}
                >
                    {adminPageState.success.message ?? adminPageState.error.message ?? ""}
                </Alert>
            </div>

            <Fragment>
                <div className="flex flex-col">
                    <div className="fixed pt-6 pl-6 bg-white z-40">
                        <Button color="secondary" isIconOnly onClick={onOpenDrawer}>
                            <Bars3BottomLeftIcon className="w-6 h-6" />
                        </Button>
                    </div>
                    <div className="flex flex-row w-full h-screen overflow-hidden">
                        <div className="xl:hidden">
                            <Drawer open={isDrawerOpen} onClose={onCLoseDrawer}>
                                <SlidebarAdmin />
                            </Drawer>
                        </div>

                        <div className="hidden xl:block">
                            <SlidebarAdmin />
                        </div>

                        <div className="w-full xl:pl-72 overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    )
}
