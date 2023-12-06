
import { NavigationModel, NavigationsData } from "@/app/models/navigation"
import React, { ReactNode, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box';
import { styled } from "@mui/material"
import { motion } from "framer-motion"
import AdminPagesHeroSection from "@/app/components/admin-pages-sections/admin-pages-hero-section"
import AdminPagesContentSection from "@/app/components/admin-pages-sections/admin-pages-content-section"
import { Button, Link } from "@nextui-org/react"
import { PlusIcon } from "@heroicons/react/24/outline"
import AdminPagesComponent from "@/app/components/admin-pages/admin-pages"
import Error from 'next/error'
import { notFound, useRouter } from "next/navigation";


export function generateStaticParams() {
    return [{ route: 'about' }, { route: 'education' }];
}

export default function AdminPages({ params }: { params: { route: string } }) {


    return (
        <>
            <AdminPagesComponent route={params.route} />
        </>
    )
}

