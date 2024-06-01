'use client'

import ModelAdmin from "@/app/components/admin-modal/modal-admin";
import AdminPagesContentSection from "@/app/components/admin-pages-sections/admin-pages-content-section";
import AdminPagesHeroSection from "@/app/components/admin-pages-sections/admin-pages-hero-section";
import { NavigationModel, NavigationsData } from "@/app/models/navigation-model";
import { useAppSelector, useAppDispatch } from "@/app/redux/hook";
import { ArrowUpTrayIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { Box, Tab, Tabs, styled } from "@mui/material";
import { Breadcrumbs, Button, Card, Image, Input, Link, link, useDisclosure } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { ReactNode, useState } from 'react'

export default function GalleryAdminPage() {

    const adminPageState = useAppSelector((state) => state.adminReducer.pageState)

    const dispatch = useAppDispatch()

    // const galleryNavigation: GalleryModel[] = adminPageState.gallery

    const aboutNavigation: Array<NavigationModel> = NavigationsData[0].sub_navigation

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const [open, setOpen] = useState(false)

    const [value, setValue] = useState(0)

    const handleOpen = () => setOpen(!open);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const CustomTab = styled(Tab)({
        textTransform: "capitalize",
        color: '#888888',
        '&.Mui-selected': {
            color: '#465B5A',
        },

    })

    return (
        <>
            <div className="flex w-full flex-col p-6 sm:p-12 overflow-hidden">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="flex gap-3 items-center">

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
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            aboutNavigation.map((sub) => (

                                <CustomTab key={sub.title} label={sub.title} />

                            ))
                        }
                    </Tabs>
                    <Button className="bg-aztec-500 text-white" size="sm" isIconOnly onClick={handleOpen}><PlusIcon className="h-5 w-5" /></Button>
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
                                />

                            </div>
                        </DialogBody>
                        <DialogFooter >
                            <div className="flex flex-row gap-3">
                                <Button color="danger" variant="light" onClick={handleOpen}>
                                    Close
                                </Button>
                                <Button color="primary" isLoading={adminPageState.addSubPageState.loading}>
                                    Save
                                </Button>
                            </div>

                        </DialogFooter>
                    </Dialog>
                </Box>

                {
                    aboutNavigation.map((sub, index) => (

                        <TabPanel key={sub.title} index={index} value={value}>
                            <motion.div className="flex flex-col gap-8 pt-5"
                                drag
                                initial={{
                                    x: 100,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1
                                }}>

                                <div className="flex gap-4" >
                                    <Card className="border-none h-48 w-48">
                                        <Image src="/assets/img/hero-model-3.jpg" />
                                    </Card>

                                    <Button className="h-48 w-48 px-0 text-aztec-700 bg-aztec-100" onClick={onOpen}>
                                        <PlusIcon className="w-6 h-6" />
                                    </Button>
                                </div>
                                <ModelAdmin
                                    isOpen={isOpen}
                                    onOpenChange={onOpenChange}
                                    size="xs"
                                    body={
                                        <div className="flex flex-col gap-4 justify-center items-center w-full">

                                            <div className="flex justify-center items-center h-[200px] w-[200px] bg-cover rounded-2xl overflow-hidden border border-night-800 border-dashed">
                                                <div className="flex flex-col gap-2 items-center">
                                                    <span>No Image Choosen</span>
                                                </div>
                                            </div>
                                            <label className="block">
                                                <span className="sr-only">Choose a Photo</span>
                                                <input type="file"
                                                    className="block w-full text-sm text-gray-500 file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-aztec-500 file:text-white hover:file:bg-aztec-400 file:disabled:opacity-50 file:disabled:pointer-events-none" />
                                            </label>

                                        </div>

                                    }

                                    footer={
                                        (onClose) => (
                                            <div className="flex flex-row gap-3">
                                                <Button color="danger" variant="light" onClick={onClose}>
                                                    Close
                                                </Button>
                                                <Button color="primary" onClick={onClose}>
                                                    Save
                                                </Button>
                                            </div>
                                        )

                                    } />
                            </motion.div>
                        </TabPanel>

                    ))
                }
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