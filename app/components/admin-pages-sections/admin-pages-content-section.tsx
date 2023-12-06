import { PencilIcon } from "@heroicons/react/24/outline"
import { useDisclosure, Button, Input } from "@nextui-org/react"

import React from 'react'
import CardAdmin from "../admin-cards/card-admin"
import CardBorderAdmin from "../admin-cards/card-border-admin"
import ModelAdmin from "../admin-modal/modal-admin"
import Tiptap from "../tiptap/tiptap"

export default function AdminPagesContentSection() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <CardAdmin title="content section">
                <CardBorderAdmin>
                    <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
                        <div className="flex flex-col gap-1 w-full text-night-800">

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi ipsam ea? Amet, perspiciatis sequi harum facilis culpa voluptatibus quia atque deserunt porro, exercitationem consequatur eum sapiente deleniti voluptas totam.
                            </p>
                        </div>
                        <Button className="text-night rounded-full w-fit bg-aztec-500" onClick={onOpen}> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
                    </div>

                </CardBorderAdmin>
            </CardAdmin>


            <ModelAdmin
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="full"
                body={
                    <div className="flex flex-col gap-4 max-h-full">
                        <Tiptap></Tiptap>

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
        </>
    )
}
