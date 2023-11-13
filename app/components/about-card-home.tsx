import { Button } from "@nextui-org/react"
import React from 'react'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

export default function AboutCardHome() {
    return (
        <>
            <div className="flex justify-center w-full px-64 mt-16">
                <div className="flex flex-row gap-12 rounded-xl overflow-hidden bg-white w-full px-14 pt-14 shadow-xl">
                    <div className="w-60 h-60  bg-[url('/assets/img/about-model.png')] bg-cover"></div>
                    <div className="flex flex-col justify-center gap-3">
                        <div>
                            <div className="text-xl font-semibold">Tentang Kami</div>
                            <div className="text-2xl font-bold">Madrasah Ibtidaiyah Silahul Ulum</div>
                        </div>
                        <div>Descriptons</div>
                        <Button className="w-fit rounded-full bg-aztec-500 text-white">Cek Sekarang <ArrowSmallRightIcon className="h-6 w-6 text-white"></ArrowSmallRightIcon> </Button>
                    </div>

                </div>
            </div>

        </>
    )
}
