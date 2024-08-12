"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function BigPic({words}: {words: string}) {
    return <p><TextGenerateEffect words={words} /></p>;
}
