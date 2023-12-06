'use client';

import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Alert } from "@material-tailwind/react";
import { Button, Input } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Login() {
    const session = useSession();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState({
        isOpen: false,
        message: ""
    });
    const [isLoading, setLoading] = useState(false)

    const submitHandler = async () => {
        setLoading(true)

        try {
            const data = await signIn(
                "credentials",
                {
                    redirect: false,
                    email,
                    password,
                }
            ).then((callback) => {
                console.log(callback);

                if (callback?.error) {
                    setOpen(
                        {
                            isOpen: true,
                            message: callback.error
                        }
                    )
                }

                if (callback?.ok && !callback?.error) {
                    setOpen(
                        {
                            isOpen: true,
                            message: 'Logged in successfully!'
                        }
                    )
                }
            });

            console.log("LOGIN", data);
        } catch (error) {
            console.log("LOGIN", error);

        }

        setLoading(false)

    }

    if (session?.status === 'loading') {
        return (
            <div>
                Loading......
            </div>
        );
    }

    if (session?.status === 'authenticated') {
        router.push('/admin')
        return (
            <div>
                redirecting......
            </div>
        );
    }

    return (
        <>
            <div className="fixed z-50 left-1/2 top-4 transform -translate-x-1/2">
                <Alert className="max-w-screen-md "
                    icon={ <InformationCircleIcon className="w-6 h-6 text-white" />}
                    open={open.isOpen}
                    onClose={() => setOpen({ ...open, isOpen: false, })}
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 100 },
                    }}
                >
                    {
                        open.message
                    }
                </Alert>
            </div>

            <div className="w-full h-screen relative bg-white">
                <div className="w-full h-full flex items-center">
                    <div className="w-full px-12 md:px-[140px] md:py-[90px] flex-col justify-center items-center inline-flex">

                        <div
                            className="w-full flex-col justify-start items-center gap-[25px] flex"
                        >
                            <div className="self-stretch flex-col justify-center items-start gap-2.5 flex">
                                <div className="text-gray-700 text-[32px] font-semibold">Masuk ke akun kamu</div>
                                <div className="self-stretch text-gray-600 text-base font-normal leading-7">
                                    Selamat datang di halaman login Madrasah Ibtidaiyah Silahul Ulum.
                                    Silakan masuk ke akun Anda untuk mengakses fitur-fitur yang tersedia.
                                </div>
                            </div>
                            <div className="self-stretch flex-col justify-start items-start gap-[30px] flex">
                                <Input
                                    size="lg"
                                  
                                    label="Email"
                                    labelPlacement="outside"
                                    type="email"
                                    placeholder="hello@me.com"
                                    autoComplete="email"
                                    value={email}
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    onValueChange={(e) => setEmail(e)}
                                    disabled={isLoading}
                                />
                                <Input
                                    size="lg"
                                    
                                    label="Password"
                                    labelPlacement="outside"
                                    type="password"
                                    placeholder="••••••••••••••••••••••"
                                    autoComplete="password"
                                    value={password}
                                    onValueChange={(e) => setPassword(e)}
                                    disabled={isLoading}
                                />

                                <Button className="w-full bg-aztec-500 py-8" isLoading={isLoading} onClick={submitHandler}>
                                    <span className="text-white text-base font-semibold">
                                        Masuk
                                    </span>
                                </Button>
                                {/* <button className="self-stretch p-6 bg-aztec-600 rounded--md shadow justify-center items-center gap-2.5 inline-flex">
                                    <div className="text-white text-base font-semibold">Masuk</div>
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full hidden lg:block relative bg-gradient-to-b from-aztec-800 to-aztec-900 overflow-hidden">
                        <div className="w-[935px] h-[935px] left-[74px] top-[250px] absolute bg-gradient-to-b from-white to-white rounded-full opacity-[0.01]" />
                        <div className="w-[935px] h-[935px] left-[-134px] top-[66px] absolute bg-gradient-to-br from-white to-white rounded-full opacity-[0.01]" />
                        <div className="w-[1090px] h-[1090px] left-[-249px] top-[-73px] absolute bg-gradient-to-br from-white to-white rounded-full opacity-[0.01]" />
                        <div className="w-[700px] h-[700px] left-[282px] top-[434px] absolute bg-gradient-to-br from-white to-white rounded-full opacity-[0.01]" />
                    </div>
                </div>
            </div>

        </>

    );
}
