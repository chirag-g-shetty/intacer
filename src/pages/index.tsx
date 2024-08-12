import React from "react";
import { useRouter } from 'next/router';
import { Vortex } from '@/components/ui/vortex';

export default function Home() {
    const router = useRouter();

    const goToWelcome = () => {
        router.push('/welcome');
    };
    return (
        <div className="w-screen h-screen mx-auto rounded-md overflow-hidden">
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center w-full h-full px-2 md:px-10 py-4"
            >
                <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                    Guiding you through new realms with clarity and insight
                </h2>
                <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                    Unveil the power of your <br/><i>Intuition</i>
                </p>
                <br/>
                <button
                    className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                    onClick={goToWelcome}>
                    Begin
                </button>
            </Vortex>
        </div>
    );
}
