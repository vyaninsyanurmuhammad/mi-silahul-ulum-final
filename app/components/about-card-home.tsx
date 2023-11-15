'use client'

import { Button } from "@nextui-org/react"
import React from 'react'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'
import { Player } from "@lottiefiles/react-lottie-player"

export default function AboutCardHome(
    {
        title,
        description,
        imgModelSrc,
        isAbout = false,
        route
    }: {
        title?: string,
        description?: string,
        imgModelSrc: string,
        isAbout?: boolean,
        route?: string
    }) {
    return (
        <>
            <section className="px-8 xl:px-64">
                <div className="relative rounded-xl overflow-hidden shadow-xl group">
                    <div className="absolute w-full h-full bg-gray-300">

                        <Player className="scale-[5.0] pl-[200px] group-hover:scale-[15.0] group-hover:pl-0 duration-1000"
                            autoplay={true}
                            loop={true}
                            src="https://assets1.lottiefiles.com/packages/lf20_zd3udbkt.json"
                            style={{ height: '1000px', width: '1000px', }}

                        ></Player>

                    </div>
                    <div className="relative">
                        <div className="flex justify-center w-full">
                            <div className="flex flex-row gap-12 w-full px-14">
                                <div className="w-60 h-60 pt-6 bg-cover"><img src={imgModelSrc} alt={""}></img></div>
                                <div className="flex flex-col justify-center gap-3">
                                    <div>
                                        {isAbout ? <div className="text-xl font-semibold">Tentang Kami</div> : <></>}
                                        <div className="text-2xl font-bold">{title}</div>
                                    </div>
                                    <div>{description}</div>
                                    <Button className="w-fit rounded-full bg-aztec-500 text-white">Cek Sekarang <ArrowSmallRightIcon className="h-6 w-6 text-white"></ArrowSmallRightIcon> </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
