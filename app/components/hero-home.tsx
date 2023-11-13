import React from 'react'

export default function HeroHome() {
    return (
        <>
            <section className="flex h-[720px] w-full bg-[url('/assets/img/bg-hero.png')] bg-cover bg-center">
                <div className="flex items-center justify-center w-full h-full bg-aztec-500 bg-opacity-80">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between space-y-[32px] lg:space-x-[32px] w-full px-[54px] sm:px-[48px] xl:px-[271px]">
                        <div className="w-fit lg:w-[756px] text-white">
                            <div className="font-bold text-[24px] lg:text-[64px] uppercase">MADRASAH IBTIDAIYAH SILAHUL ULUM</div>
                            <div className="font-bold text-base lg:text-[24px] uppercase">ASEMPAPAN, TRANGKIL, PATI</div>
                        </div>
                        <div className="flex flex-col space-y-[32px] w-fit justify-center items-center">
                            <div className="flex flex-row space-x-[32px]">
                                <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-1.jpg')] bg-cover rounded-b-2xl rounded-t-[99px] overflow-hidden"></div>
                                <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-2.jpg')] bg-cover rounded-2xl overflow-hidden"></div>
                            </div>
                            <div className="flex flex-row space-x-[32px]">
                                <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-3.jpg')] bg-cover rounded-t-[15px] rounded-b-[15px]"></div>
                                <div className="h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] bg-[url('/assets/img/hero-model-4.jpg')] bg-cover rounded-b-[100px]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
