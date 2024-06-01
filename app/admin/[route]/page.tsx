'use client'

import { NavigationModel, NavigationsData } from "@/app/models/navigation-model"
import React, { ReactNode, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box';
import { styled } from "@mui/material"
import { motion } from "framer-motion"
import AdminPagesHeroSection from "@/app/components/admin-pages-sections/admin-pages-hero-section"
import AdminPagesContentSection from "@/app/components/admin-pages-sections/admin-pages-content-section"
import { Button, Link, Progress } from "@nextui-org/react"
import { PlusIcon } from "@heroicons/react/24/outline"
import AdminPagesComponent from "@/app/components/admin-pages/admin-pages"
import Error from 'next/error'
import { notFound, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook"
import { changePageLoading } from "@/app/redux/feature/admin-slice"


// export function generateStaticParams() {
//     return [{ route: 'about' }, { route: 'education' }];
// }

export default function AdminPages({ params }: { params: { route: string } }) {

    const adminPageState = useAppSelector((state) => state.adminReducer.pageState)

    const dispatch = useAppDispatch()

    if (adminPageState.loadPageState.loading || adminPageState.loading ) {
        return (
            <>
                <div className="flex h-screen w-full justify-center items-center">
                    <Progress
                        size="sm"
                        isIndeterminate
                        aria-label="Loading..."
                        color="default"
                        className="max-w-md px-4" />
                </div>
            </>
        )
    }

    if (!(adminPageState.pages.find((page) => page.route.link === params.route))) {
        return (
            <>
                <div className="flex h-screen w-full justify-center items-center">
                    <span>
                        Not Found
                    </span>
                </div>
            </>
        )
    }

    return (
        <>
            <AdminPagesComponent route={params.route} />
        </>
    )
}

