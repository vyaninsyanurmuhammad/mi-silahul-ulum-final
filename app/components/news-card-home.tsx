import { Button } from "@nextui-org/react"
import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function NewsCardHome() {
    return (
        <>
            <div className="rounded-xl w-80 h-fit overflow-hidden shadow-xl bg-white">
                <div className="w-full h-60 bg-slate-300">
                    <img className="w-full h-full object-cover" src="/assets/img/hero-model-4.jpg" alt=""></img>
                </div>
                <div className="flex flex-col items-end gap-4 p-6">
                    <div className="flex flex-col gap-3">
                        <span className="text-xs text-night-400">
                            2023-05-01
                        </span>
                        <div className="font-bold text-xl text-night-800">
                            LOREM IPSUM DOLOR SIT AMET
                        </div>
                        <div className="line-clamp-3 text-night-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lectus auctor, porttitor nisl eget, aliquet nulla. Integer lacinia eros non risus iaculis, vel egestas nibh faucibus. Fusce vel ipsum sit amet justo mollis rhoncus at vel metus.
                        </div>
                    </div>
                    <Button className="w-fit rounded-full text-aztec-700" variant="light" >Lihat Lebih Lanjut <ArrowTopRightOnSquareIcon className="h-6 w-6 "></ArrowTopRightOnSquareIcon> </Button>

                </div>

            </div>
        </>
    )
}
