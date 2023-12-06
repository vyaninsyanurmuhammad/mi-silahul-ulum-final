'use client'

import AdminPagesContentSection from "@/app/components/admin-pages-sections/admin-pages-content-section";
import AdminPagesHeroSection from "@/app/components/admin-pages-sections/admin-pages-hero-section";
import { NavigationModel, NavigationsData } from "@/app/models/navigation";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Box, Tab, Tabs, styled } from "@mui/material";
import { Button, Card, Image, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { ReactNode, useState } from 'react'

export default function GalleryAdminPage() {

    const aboutNavigation: Array<NavigationModel> = NavigationsData[0].sub_navigation


    const [value, setValue] = useState(0)

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
                    <Button className="bg-aztec-500 text-white" size="sm" isIconOnly ><PlusIcon className="h-5 w-5" /></Button>

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

                                    <Button className="h-48 w-48 px-0 text-aztec-700 bg-aztec-100">
                                        <PlusIcon className="w-6 h-6" />
                                    </Button>
                                </div>
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