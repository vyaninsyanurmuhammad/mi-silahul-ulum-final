import React from 'react'
import { SwiperSlide } from "swiper/react"
import { Swiper } from "swiper/react"
import CardBorderAdmin from "../admin-cards/card-border-admin"
import NewsCardHome from "../news-card-home"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'

export default function AdminHomeNewsSection() {
  return (
    <>
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
    </>
  )
}
