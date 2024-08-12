"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import {CareerOptions} from "@/components/CareerOptions";
import NavBar from "@/components/NavBar";

export function Careers() {
    return (
        <>
            <NavBar/>
        <div>
        <HeroHighlight>
            <div style={{
                position: "relative",
                left: -180,
                top:-190
            }}>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto"
                >
                    Join us in bringing out the <br/>

                    <Highlight className="text-black dark:text-white">
                         next evolution of learning
                    </Highlight>
                    {" "} to come

                {/* Options here   */}
                <CareerOptions/>

                </motion.h1>
            </div>
        </HeroHighlight>
        </div>
</>
);
}

export default Careers;
