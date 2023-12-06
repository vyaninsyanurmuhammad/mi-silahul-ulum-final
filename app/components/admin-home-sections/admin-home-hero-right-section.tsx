import { Button, Input, useDisclosure } from "@nextui-org/react"
import React from 'react'
import CardAdmin from "../admin-cards/card-admin"
import { ArrowUpTrayIcon, PencilIcon } from "@heroicons/react/24/outline"
import CardBorderAdmin from "../admin-cards/card-border-admin"
import ModelAdmin from "../admin-modal/modal-admin"

export default function AdminHomeHeroRightSection() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (

        <>
            <CardBorderAdmin size="w-full md:w-fit">
                <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
                    <div className="flex flex-col space-y-8 w-full md:w-fit justify-center items-center">
                        <div className="flex flex-row space-x-[32px]">
                            <div className="h-24 w-24 sm:h-40 sm:w-40 lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-1.jpg')] bg-cover rounded-b-2xl rounded-t-[99px] overflow-hidden"></div>
                            <div className="h-24 w-24 sm:h-40 sm:w-40 lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-2.jpg')] bg-cover rounded-2xl overflow-hidden"></div>
                        </div>
                        <div className="flex flex-row space-x-[32px]">
                            <div className="h-24 w-24 sm:h-40 sm:w-40 lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-3.jpg')] bg-cover rounded-t-[15px] rounded-b-[15px]"></div>
                            <div className="h-24 w-24 sm:h-40 sm:w-40 lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-4.jpg')] bg-cover rounded-b-[100px]"></div>
                        </div>
                    </div>
                    <Button className="text-night rounded-full w-fit bg-aztec-500" onClick={onOpen}> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
                </div>

                <ModelAdmin
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    size="xl"
                    body={
                        <div className="flex justify-center w-full">

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col space-y-8 w-fit justify-center items-center">
                                    <div className="flex flex-row space-x-8">
                                        <div className="flex justify-center items-center h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-cover rounded-b-2xl rounded-t-[100px] overflow-hidden border border-night-800 border-dashed" >
                                            <div className="flex flex-col gap-2 items-center">
                                                <ArrowUpTrayIcon className="w-5 h-5 text-night-800" />
                                                <span>Click To Upload</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-cover rounded-2xl overflow-hidden border border-night-800 border-dashed">
                                            <div className="flex flex-col gap-2 items-center">
                                                <ArrowUpTrayIcon className="w-5 h-5 text-night-800" />
                                                <span>Click To Upload</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-8">
                                        <div className="flex justify-center items-center h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-cover rounded-t-2xl rounded-b-2xl border border-night-800 border-dashed">
                                            <div className="flex flex-col gap-2 items-center">
                                                <ArrowUpTrayIcon className="w-5 h-5 text-night-800" />
                                                <span>Click To Upload</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-cover rounded-t-2xl rounded-b-[100px] border border-night-800 border-dashed">
                                            <div className="flex flex-col gap-2 items-center">
                                                <ArrowUpTrayIcon className="w-5 h-5 text-night-800" />
                                                <span>Click To Upload</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
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
            </CardBorderAdmin>

        </>

    )
}
