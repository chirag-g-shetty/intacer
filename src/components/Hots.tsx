"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function Hots({ques}:{ques:string}) {
    ques = ques.split('\n').slice(1).join('\n')
    let arr = ques.split('?')
    arr.pop()
    ques = arr.join('?\n')
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                HOTS <br /> how far can you think?
                <p style={{
                    marginTop:20,
                    fontSize:20,
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word',
                    textAlign: 'justify',
                    lineHeight: '1.2'
                }}>{ques+'?'}</p>
            </motion.h1>
        </LampContainer>
    );
}
