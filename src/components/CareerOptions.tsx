import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export function CareerOptions() {
    return (
        <div style={{
            position: "absolute",
            top:200
        }}>
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
        </div>
    );
}

const items = [
    {
        title: "Data Analyst",
        description: "Identify patterns, preference and areas of improvements",
    },
    {
        title: "Marketing Specialist",
        description: "Promote platform and reach broader audience",
    },

];
