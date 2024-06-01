import { PencilIcon } from "@heroicons/react/24/outline"
import { useDisclosure, Button, Input } from "@nextui-org/react"

import React, { useEffect, useState } from 'react'
import CardAdmin from "../admin-cards/card-admin"
import CardBorderAdmin from "../admin-cards/card-border-admin"
import ModelAdmin from "../admin-modal/modal-admin"
import Tiptap from "../tiptap/tiptap"
import { useAppDispatch } from "@/app/redux/hook"
import { updatePageContent, updateSubPageContent } from "@/app/redux/feature/admin-slice"

export default function AdminPagesContentSection({ isMainPage, id, subId, content }: { isMainPage: boolean, id: string, subId: string, content?: string }) {

    const dispatch = useAppDispatch()

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const [contentState, setContentState] = useState("")

    const handleUpdateContent = () => {
        isMainPage ?
            dispatch(updatePageContent({ id, content: contentState })) : dispatch(updateSubPageContent({ id, subId, content: contentState }))
    }

    useEffect(() => {
        setContentState(content === undefined || content === "" ? "" : content)
    }, [])

    return (
        <>
            <CardAdmin title="content section">
                <CardBorderAdmin>
                    <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
                        <div className="flex flex-col gap-1 w-full text-night-800">
                            {(content === undefined || content === "") ? <span className="opacity-70">Konten belum di isi !</span> : (<article className="w-full max-w-full prose" dangerouslySetInnerHTML={{ __html: content ?? "<></>" }}></article>)}
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
                        <Tiptap content={content ?? ""} onValueChange={(value) => setContentState(value)}></Tiptap>

                    </div>
                }

                footer={
                    (onClose) => (
                        <div className="flex flex-row gap-3">
                            <Button color="danger" variant="light" onClick={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onClick={() => {
                                handleUpdateContent()
                                onClose()
                            }}>
                                Save
                            </Button>
                        </div>
                    )

                } />
        </>
    )
}
