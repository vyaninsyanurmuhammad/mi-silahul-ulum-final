'use client'

import React from 'react'
import NewsCardHome from "./news-card-home"
import { Button } from "@nextui-org/react"
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline"
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"

export default function NewsHome() {
    return (
        <>
            <div className="flex flex-col 2xl:px-64 gap-4">
                <div className="flex w-full justify-between items-center md:items-end px-16 xl:px-32 2xl:px-0">
                    <div className="text-3xl font-bold text-night-800">
                        Berita & Acara Terbaru
                    </div>
                    <Button className="w-fit rounded-full bg-aztec-500 text-white"><span className="hidden md:block">Cek Berita Selengkapnya </span><ArrowSmallRightIcon className="h-6 w-6 text-white"></ArrowSmallRightIcon> </Button>

                </div>

                <div className="hidden 2xl:grid 2xl:grid-cols-4 gap-8 ">
                    <NewsCardHome></NewsCardHome>
                    <NewsCardHome></NewsCardHome>
                    <NewsCardHome></NewsCardHome>
                    <NewsCardHome></NewsCardHome>
                </div>
                <div className="2xl:hidden flex w-full">
                    <Swiper slidesPerView={"auto"}
                        spaceBetween={32}
                        grabCursor={true}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true
                        }}
                        className="first:pl-16 last:pr-16 xl:first:pl-32 xl:last:pr-32"
                    >
                        <SwiperSlide style={{ width: "fit-content" }} className="w-fit pb-12">
                            <div className="w-fit">
                                <NewsCardHome />
                            </div>

                        </SwiperSlide>
                        <SwiperSlide style={{ width: "fit-content" }} className="w-fit">
                            <div className="w-fit">
                                <NewsCardHome />

                            </div>

                        </SwiperSlide>
                        <SwiperSlide style={{ width: "fit-content" }} className="w-fit">
                            <div className="w-fit">
                                <NewsCardHome />

                            </div>

                        </SwiperSlide>
                        <SwiperSlide style={{ width: "fit-content" }} className="w-fit">
                            <div className="w-fit">
                                <NewsCardHome />

                            </div>

                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>

        </>
    )
}
