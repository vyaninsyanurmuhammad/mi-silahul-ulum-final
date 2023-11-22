'use client'

import React from 'react'
import CardAdmin from "../components/admin-cards/card-admin"
import { Button } from "@nextui-org/react"
import { ArrowTopRightOnSquareIcon, PencilIcon } from "@heroicons/react/24/outline"
import CardBorderAdmin from "../components/admin-cards/card-border-admin"
import { Swiper, SwiperSlide } from "swiper/react"
import NewsCardHome from "../components/news-card-home"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import AchievementCardHome from "../components/achievement-card-home"

export default function Admin() {
  return (
    <>
      <div className="flex flex-col w-full p-12 gap-8">
        <CardAdmin title="Hero Section">

          <CardBorderAdmin>
            <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
              <div className="flex flex-col gap-2 w-full text-night-800 ">
                <h1 className="text-4xl font-bold">
                  Madrasah Ibtidaiyah Sialhul Ulum
                </h1>
                <p className="text-xl">
                  Asempapan. Trangkil, Pati
                </p>
              </div>
              <Button className="text-night rounded-full w-fit bg-aztec-500"> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
            </div>

          </CardBorderAdmin>

          <CardBorderAdmin size="w-fit">
            <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
              <div className="flex flex-col space-y-8 w-fit justify-center items-center">
                <div className="flex flex-row space-x-8">
                  <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-1.jpg')] bg-cover rounded-b-2xl rounded-t-[99px] overflow-hidden"></div>
                  <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-2.jpg')] bg-cover rounded-2xl overflow-hidden"></div>
                </div>
                <div className="flex flex-row space-x-8">
                  <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-3.jpg')] bg-cover rounded-t-[15px] rounded-b-[15px]"></div>
                  <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-4.jpg')] bg-cover rounded-b-[100px]"></div>
                </div>
              </div>
              <Button className="text-night rounded-full w-fit bg-aztec-500"> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
            </div>
          </CardBorderAdmin>
        </CardAdmin>

        <CardAdmin title="Tentang Kami Section">

          <CardBorderAdmin size="w-fit">
            <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
              <div className="flex flex-col space-y-[32px] w-fit justify-center items-center">
                <div className="flex flex-row space-x-[32px]">
                  <div className="flex justify-center h-full w-full lg:w-fit md:pt-6 bg-cover overflow-hidden">
                    <img className="h-full w-60 object-cover object-top" src="/assets/img/about-model.png" alt={""}></img>
                  </div>
                </div>
              </div>
              <Button className="text-night rounded-full w-fit bg-aztec-500"> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
            </div>
          </CardBorderAdmin>

          <CardBorderAdmin>
            <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
              <div className="flex flex-col gap-2 w-full text-night-800">
                <h2 className="text-xl font-bold">
                  Tentang Kami
                </h2>
                <h1 className="text-2xl font-bold">
                  Madrasah Ibtidaiyah Sialhul Ulum
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <Button className="text-night rounded-full w-fit bg-aztec-500"> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
            </div>
          </CardBorderAdmin>
        </CardAdmin>

        <CardAdmin title="berita & acara terbaru section" seeMoreLink="/">
          <CardBorderAdmin>
            <div className="w-full overflow-hidden">
              <Swiper slidesPerView={"auto"}
                spaceBetween={32}
                grabCursor={true}
                modules={[Pagination]}
                pagination={{
                  clickable: true
                }}
                className="flex w-full first:pl-8 last:pr-8"
              >

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <NewsCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <NewsCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <NewsCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <NewsCardHome />
                </SwiperSlide>

              </Swiper>

            </div>
          </CardBorderAdmin>
        </CardAdmin>

        <CardAdmin title="prestasi madrasah section" seeMoreLink="/">
          <CardBorderAdmin>
            <div className="w-full overflow-hidden">
              <Swiper slidesPerView={"auto"}
                spaceBetween={32}
                grabCursor={true}
                modules={[Pagination]}
                pagination={{
                  clickable: true
                }}
                className="flex w-full first:pl-8 last:pr-8"
              >

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <AchievementCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <AchievementCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <AchievementCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <AchievementCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <AchievementCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <AchievementCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <AchievementCardHome />
                </SwiperSlide>

                <SwiperSlide style={{ width: "fit-content" }} className="py-8">
                  <AchievementCardHome />
                </SwiperSlide>

              </Swiper>

            </div>
          </CardBorderAdmin>
        </CardAdmin>

        <CardAdmin title="ppdb section" seeMoreLink="/">

          <CardBorderAdmin size="w-fit">
            <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
              <div className="flex flex-col space-y-[32px] w-fit justify-center items-center">
                <div className="flex flex-row space-x-[32px]">
                  <div className="flex justify-center h-full w-full lg:w-fit md:pt-6 bg-cover overflow-hidden">
                    <img className="h-full w-60 object-cover object-top" src="/assets/img/ppdb-model.png" alt={""}></img>
                  </div>
                </div>
              </div>
              <Button className="text-night rounded-full w-fit bg-aztec-500"> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
            </div>
          </CardBorderAdmin>

          <CardBorderAdmin>
            <div className="flex flex-col w-full h-full p-7 gap-5 justify-end items-end">
              <div className="flex flex-col gap-2 w-full text-night-800">
                <h1 className="text-2xl font-bold">
                  Madrasah Ibtidaiyah Sialhul Ulum
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <Button className="text-night rounded-full w-fit bg-aztec-500"> <PencilIcon className="w-5 h-5" /><span>Edit</span> </Button>
            </div>
          </CardBorderAdmin>
        </CardAdmin>
      </div >
    </>
  )
}
