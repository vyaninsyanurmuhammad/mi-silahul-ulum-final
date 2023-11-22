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
            <section className="px-16 xl:px-32 2xl:px-64">
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
                            <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full px-8 lg:px-14 py-14 md:py-0 justify-center md:justify-start">
                                <div className="flex justify-center h-full w-full lg:w-fit md:pt-6 bg-cover overflow-hidden">
                                    <img className="h-full w-60 object-cover object-top" src={imgModelSrc} alt={""}></img>
                                </div>
                                <div className="flex flex-col justify-center items-center lg:items-start gap-6 py-12 w-full">
                                    <div className="flex flex-col gap-1">
                                        {isAbout ? <h2 className="text-xl font-semibold text-center lg:text-start text-night-800">Tentang Kami</h2> : <></>}
                                        <h1 className="text-2xl font-bold text-center lg:text-start text-night-800">{title}</h1>
                                        <div className="text-center lg:text-start text-night-600">{description}</div>
                                    </div>
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
