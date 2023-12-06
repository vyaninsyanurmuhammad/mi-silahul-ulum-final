import React from 'react'
import CardBorderAdmin from "../admin-cards/card-border-admin"
import { Button, useDisclosure } from "@nextui-org/react"
import { ArrowUpTrayIcon, PencilIcon } from "@heroicons/react/24/outline"
import ModelAdmin from "../admin-modal/modal-admin"

export default function AdminHomeAboutLeftSection() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure()


    return (
        <>
            <CardBorderAdmin size="w-full md:w-fit">
                <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
                    <div className="flex flex-col space-y-[32px] w-full md:w-fit justify-center items-center">
                        <div className="flex flex-row space-x-[32px]">
                            <div className="flex justify-center h-full w-full lg:w-fit md:pt-6 bg-cover overflow-hidden">
                                <img className="h-full w-60 object-cover object-top" src="/assets/img/about-model.png" alt={""}></img>
                            </div>
                        </div>
                    </div>
                    <Button className="text-night rounded-full w-fit bg-aztec-500" onClick={onOpen}> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
                </div>

                <ModelAdmin
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    size="xs"
                    body={
                        <div className="flex justify-center w-full">


                            <div className="flex justify-center items-center h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-cover rounded-2xl overflow-hidden border border-night-800 border-dashed">
                                <div className="flex flex-col gap-2 items-center">
                                    <ArrowUpTrayIcon className="w-5 h-5 text-night-800" />
                                    <span>Click To Upload</span>
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
