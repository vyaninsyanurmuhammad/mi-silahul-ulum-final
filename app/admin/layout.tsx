'use client'

import React, { Fragment, ReactNode, useState } from 'react'
import SlidebarAdmin from "../components/navigation-bar-admin"
import { Button } from "@nextui-org/react"
import { Drawer } from "@material-tailwind/react"
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline"

export default function Adminlayout({ children }: { children: ReactNode }) {

    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const onOpenDrawer = () => setDrawerOpen(true)
    const onCLoseDrawer = () => setDrawerOpen(false)

    return (
        <>
            <Fragment>
                <div className="flex flex-col">
                    <div className="fixed pt-6 pl-6 bg-white z-20">
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

                        <div className="w-full xl:pl-72 pt-16 xl:pt-0 overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </Fragment>
        </>
    )
}
