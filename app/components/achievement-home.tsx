import React from 'react'
import NewsCardHome from "./news-card-home"
import { Button } from "@nextui-org/react"
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline"
import AchievementCardHome from "./achievement-card-home"

export default function AchievementHome() {
    return (
        <>
            <div className="flex flex-col px-64 gap-4">
                <div className="flex w-full justify-between items-end">
                    <div className="text-3xl font-bold text-night-800">
                        Prestasi Madrasah
                    </div>
                    <Button className="w-fit rounded-full bg-aztec-500 text-white">Cek Prestasi Selengkapnya <ArrowSmallRightIcon className="h-6 w-6 text-white"></ArrowSmallRightIcon> </Button>

                </div>

                <div className="grid grid-cols-4 gap-8">
                    <AchievementCardHome></AchievementCardHome>
                    <AchievementCardHome></AchievementCardHome>
                    <AchievementCardHome></AchievementCardHome>
                    <AchievementCardHome></AchievementCardHome>
                    <AchievementCardHome></AchievementCardHome>
                    <AchievementCardHome></AchievementCardHome>
                    <AchievementCardHome></AchievementCardHome>
                    <AchievementCardHome></AchievementCardHome>
                </div>

            </div>

        </>
    )
}
