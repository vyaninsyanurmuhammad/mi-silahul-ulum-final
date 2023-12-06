import { PencilIcon } from "@heroicons/react/24/outline"
import { Button, Input, useDisclosure } from "@nextui-org/react"
import React from 'react'
import CardAdmin from "../admin-cards/card-admin"
import CardBorderAdmin from "../admin-cards/card-border-admin"
import ModelAdmin from "../admin-modal/modal-admin"

export default function AdminPagesHeroSection({ judul }: { judul: string }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <CardAdmin title="hero section">
                <CardBorderAdmin>
                    <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
                        <div className="flex flex-col gap-1 w-full text-night-800">
                            <h2 className="text-lg uppercase font-bold">
                                {
                                    judul
                                }
                            </h2>
                            <h1 className="text-2xl uppercase font-bold">
                                Madrasah Ibtidaiyah Sialhul Ulum
                            </h1>
                        </div>
                        <Button className="text-night rounded-full w-fit bg-aztec-500" onClick={onOpen}> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
                    </div>
                </CardBorderAdmin>
            </CardAdmin>
            <ModelAdmin
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                body={
                    <div className="flex flex-col gap-4">
                        <Input
                            type="text"
                            label="Title"
                            placeholder="type your title here ..."
                            labelPlacement="outside"

                        />
                        <Input
                            type="text"
                            label="Subtitle"
                            placeholder="type your subtitle here ..."
                            labelPlacement="outside"

                        />
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
