import { PencilIcon } from "@heroicons/react/24/outline"
import { Button, Input, useDisclosure } from "@nextui-org/react"
import React, { useEffect, useState } from 'react'
import CardAdmin from "../admin-cards/card-admin"
import CardBorderAdmin from "../admin-cards/card-border-admin"
import ModelAdmin from "../admin-modal/modal-admin"
import { updatePageHero, updateSubPageContent, updateSubPageHero } from "@/app/redux/feature/admin-slice"
import { useAppDispatch } from "@/app/redux/hook"
import { HeroModel } from "@/app/models/page-model"

export default function AdminPagesHeroSection({ isMainPage, id, subId, hero }: { isMainPage: boolean, id: string, subId: string, hero: HeroModel }) {

    const dispatch = useAppDispatch()

    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const [title, setTitle] = useState("")
    const [subTitle, setSubTitle] = useState("")

    const handleUpdateHero = () => {
        const newHero: HeroModel = {
            title,
            subTitle
        }

        isMainPage ?
            dispatch(updatePageHero({ id, hero: newHero })) : dispatch(updateSubPageHero({ id, subId, hero: newHero }))
    }

    useEffect(() => {
        setTitle(hero.title === undefined || hero.title === "" ? "" : hero.title)
        setSubTitle(hero.subTitle === undefined || hero.subTitle === "" ? "" : hero.subTitle)
    }, [])

    return (
        <>
            <CardAdmin title="hero section">
                <CardBorderAdmin>
                    <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
                        <div className="flex flex-col gap-1 w-full text-night-800">
                            <h2 className={`${hero.title === "" || hero.title === undefined ? "opacity-70" : ""} text-lg uppercase font-bold`}>
                                {
                                    hero.title === "" || hero.title === undefined ? "Judul Belum Ditambahkan !" : hero.title
                                }
                            </h2>
                            <h1 className={`${hero.subTitle === "" || hero.subTitle === undefined ? "opacity-70" : ""} text-2xl uppercase font-bold`}>
                                {
                                    hero.subTitle === "" || hero.subTitle === undefined ? "Sub Judul Belum Ditambahkan !" : hero.subTitle
                                }
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
                            onValueChange={(value) => setTitle(value)}
                            value={title}
                        />
                        <Input
                            type="text"
                            label="Subtitle"
                            placeholder="type your subTitle here ..."
                            labelPlacement="outside"
                            onValueChange={(value) => setSubTitle(value)}
                            value={subTitle}

                        />
                    </div>
                }

                footer={
                    (onClose) => (
                        <div className="flex flex-row gap-3">
                            <Button color="danger" variant="light" onClick={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onClick={() => {
                                handleUpdateHero()
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
