import { Button } from "@nextui-org/react"
import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function AchievementCardHome() {
    return (
        <>
            <div className="rounded-xl w-80 h-full overflow-hidden shadow-xl bg-white">
                <div className="w-full h-60 bg-slate-300">
                    <img className="w-full h-full object-cover" src="/assets/img/hero-model-4.jpg" alt=""></img>
                </div>
                <div className="flex flex-col items-end gap-4 p-6">
                    <div className="flex flex-col gap-3">

                        <div className="line-clamp-4 font-bold text-xl text-night-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut ante mollis
                        </div>

                    </div>
                    <Button className="w-fit rounded-full text-aztec-700" variant="light" >Lihat Lebih Lanjut <ArrowTopRightOnSquareIcon className="h-6 w-6 "></ArrowTopRightOnSquareIcon> </Button>

                </div>

            </div>
        </>
    )
}
