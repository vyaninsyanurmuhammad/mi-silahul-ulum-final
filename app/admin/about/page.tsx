'use client'

import { NavigationModel, NavigationsData } from "@/app/models/navigation"
import { MusicalNoteIcon, PencilIcon, PhotoIcon, VideoCameraIcon } from "@heroicons/react/24/outline"
import { Button, Card, CardBody, Chip, ScrollShadow } from "@nextui-org/react"
import React, { ReactNode, useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box';
import { Typography, styled } from "@mui/material"
import CardAdmin from "@/app/components/admin-cards/card-admin"
import CardBorderAdmin from "@/app/components/admin-cards/card-border-admin"

export default function AboutAdmin() {

    const aboutNavigation: Array<NavigationModel> = [
        {
            judul: NavigationsData[1].judul,
            link: NavigationsData[1].link,
            sub_navigation: []
        }, ...NavigationsData[1].sub_navigation
    ]

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
            <div className="flex w-full flex-col p-12">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

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
                        textColor="primary"
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            aboutNavigation.map((sub) => (

                                <CustomTab key={sub.judul} label={sub.judul} />

                            ))
                        }
                    </Tabs>

                </Box>

                {
                    aboutNavigation.map((sub, index) => (

                        <TabPanel key={sub.judul} index={index} value={value}>
                            <div className="flex flex-col gap-8 pt-5">
                                <CardAdmin title="hero section">
                                    <CardBorderAdmin>
                                        <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
                                            <div className="flex flex-col gap-1 w-full text-night-800">
                                                <h2 className="text-lg uppercase font-bold">
                                                    {
                                                        sub.judul
                                                    }
                                                </h2>
                                                <h1 className="text-2xl uppercase font-bold">
                                                    Madrasah Ibtidaiyah Sialhul Ulum
                                                </h1>
                                            </div>
                                            <Button className="text-night rounded-full w-fit bg-aztec-500"> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
                                        </div>
                                    </CardBorderAdmin>
                                </CardAdmin>

                                <CardAdmin title="content section">
                                    <CardBorderAdmin>
                                        <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
                                            <div className="flex flex-col gap-1 w-full text-night-800">

                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi ipsam ea? Amet, perspiciatis sequi harum facilis culpa voluptatibus quia atque deserunt porro, exercitationem consequatur eum sapiente deleniti voluptas totam.
                                                </p>
                                            </div>
                                            <Button className="text-night rounded-full w-fit bg-aztec-500"> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
                                        </div>
                                    </CardBorderAdmin>
                                </CardAdmin>
                            </div>
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
