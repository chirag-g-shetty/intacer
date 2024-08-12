import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Grasp() {
    const words = [
        {
            text: "What do",
        },
        {
            text: "you want to",
        },
        {
            text: "Grasp?",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <div className="flex flex-col items-start justify-center" style={{position:'absolute',marginLeft:30,marginTop:60,zIndex:1}}>
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
