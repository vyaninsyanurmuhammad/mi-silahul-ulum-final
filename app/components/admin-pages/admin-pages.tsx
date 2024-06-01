'use client'

import { NavigationModel, NavigationsData } from "@/app/models/navigation-model";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Tab, Tabs, Box, styled } from "@mui/material";
import { Button, Input, Progress } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useState } from 'react'
import AdminPagesContentSection from "../admin-pages-sections/admin-pages-content-section";
import AdminPagesHeroSection from "../admin-pages-sections/admin-pages-hero-section";
import { Breadcrumbs, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from "@material-tailwind/react";
import AdminPagesSettingSection from "../admin-pages-sections/admin-pages-setting-section";
import { PageModel } from "@/app/models/page-model";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { addSubPage } from "@/app/redux/feature/admin-slice";
import { transformData } from "@/app/utils/page-util";
import { StarIcon } from "@heroicons/react/20/solid";

type AdminPagesComponentProps = {
    route: string
}

export default function AdminPagesComponent({ route }: AdminPagesComponentProps) {

    const dispatch = useAppDispatch()

    const adminPageState = useAppSelector((state) => state.adminReducer.pageState)

    const [value, setValue] = useState(0)

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')

    const subPagesRoutes = transformData(adminPageState.pages, route)

    const linkConverter = (value: string) => {
        let linkConverted = value.toLowerCase().replace(/ /g, "")

        setTitle(value)
        setLink(linkConverted)
    }

    const addSubPageHandle = () => {
        dispatch(addSubPage({
            id: subPagesRoutes[0].id!, route: {
                index: subPagesRoutes.length - 1,
                name: title,
                link
            }
        }))

        setTitle("")
        setLink("")

        handleOpen()
    }

    const handleOpen = () => setOpen(!open);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const CustomTab = styled(Tab)({
        textTransform: "capitalize",
        color: '#888888',
        '&.Mui-selected': {
            color: '#465B5A',
        },
        minHeight: '48px'
    })

    if (adminPageState.loadPageState.loading || adminPageState.addSubPageState.loading) {
        return (

            <>
                <div className="h-full w-full flex justify-center items-center">
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

    return (
        <>
            <div className="flex w-full h-screen flex-col overflow-hidden">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="w-full bg-white pt-16 xl:pt-12 px-12 flex gap-3 items-center">
                    <Tabs
                        TabIndicatorProps={{
                            sx: {
                                backgroundColor: "#597371"
                            }
                        }}
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        textColor="primary"
                        aria-label="scrollable auto tabs"
                    >
                        {
                            subPagesRoutes.map((page, index) => (
                                (index === 0)
                                    ? <CustomTab key={page.route.link} label={page.route.name} icon={<StarIcon className="w-4 h-4 text-aztec-600" />} iconPosition="end" />
                                    : <CustomTab key={page.route.link} label={page.route.name} />

                            ))
                        }
                    </Tabs>
                    <Button className="bg-aztec-500 text-white" size="sm" isIconOnly ><PlusIcon className="h-5 w-5" onClick={handleOpen} /></Button>
                    <Dialog className="font-poppins" open={open} handler={handleOpen}>
                        <DialogHeader>
                            <></>
                        </DialogHeader>
                        <DialogBody className="w-full font-poppins">
                            <div className="flex flex-col gap-4">
                                <Input
                                    type="text"
                                    label="Title"
                                    placeholder="type your title here ..."
                                    required
                                    isDisabled={adminPageState.addPageState.loading}
                                    labelPlacement="outside"
                                    onValueChange={(value) => linkConverter(value)}
                                />

                                <Breadcrumbs>
                                    <span>
                                        {
                                            (typeof window !== 'undefined') ? window.location.origin : ''
                                        }
                                    </span>
                                    <span>
                                        {
                                            subPagesRoutes.length !== 0 ? subPagesRoutes[0].route.link : ""
                                        }
                                    </span>
                                    <span>
                                        {
                                            link
                                        }
                                    </span>
                                </Breadcrumbs>

                            </div>
                        </DialogBody>
                        <DialogFooter >
                            <div className="flex flex-row gap-3">
                                <Button color="danger" variant="light" onClick={handleOpen}>
                                    Close
                                </Button>
                                <Button color="primary" isLoading={adminPageState.addSubPageState.loading} onClick={addSubPageHandle}>
                                    Save
                                </Button>
                            </div>

                        </DialogFooter>
                    </Dialog>
                </Box>

                <div className="h-full pb-6 lg:pb-12 x px-6 lg:px-12 overflow-y-auto">
                    {
                        subPagesRoutes.map((page, index) => (

                            <TabPanel key={page.route.link} index={index} value={value}>
                                <motion.div className="flex flex-col gap-8"

                                    initial={{
                                        x: 100,
                                        opacity: 0
                                    }}
                                    animate={{
                                        x: 0,
                                        opacity: 1
                                    }}>

                                    <AdminPagesSettingSection
                                        isMainPage={!(index > 0)}
                                        titleRoute={page.route.name}
                                        route={index > 0 ? subPagesRoutes[0].route.link : ""}
                                        subRoute={page.route.link} />
                                    <AdminPagesHeroSection
                                        isMainPage={!(index > 0)}
                                        id={subPagesRoutes[0].id!}
                                        subId={page.id!}
                                        hero={page.hero} />
                                    <AdminPagesContentSection
                                        isMainPage={!(index > 0)}
                                        id={subPagesRoutes[0].id!}
                                        subId={page.id!}
                                        content={page.content} />
                                </motion.div>
                            </TabPanel>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}


const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}
