"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

function Show({urls, desc}: {urls: string[], desc: string}) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row space-x-4 mb-4">
                {urls.map((url, index) => (
                    <ImgCard key={index} url={url} />
                ))}
            </div>
            <div style={{
                position: "relative",
                top:100
            }} className="w-full max-w-[1256px] bg-gray-100 dark:bg-zinc-800 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
            </div>
        </div>
    );
}

function ImgCard({url}: {url: string}) {
    return (
        <div style={{
            position: "relative",
            top:95,
            width: 300,
            height: 300,
        }}>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <img
                    src={url}
                    alt="genAIimg"
                    height="400"
                    width="400"
                    className="object-contain"
                />
            </BackgroundGradient>
        </div>
    );
}

export default Show;