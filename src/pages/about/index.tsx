import React, { lazy, Suspense } from 'react';
import {HeroHighlight, Highlight} from "@/components/ui/hero-highlight";
import {motion} from "framer-motion";
import GradientText from "@/components/GradientText";
import NavBar from "@/components/NavBar";
const Reach = lazy(() => import('@/components/Reach'));

const About = () => {
    return (
        <>
            <NavBar/>
            <div>
                <HeroHighlight>
                    <div style={{
                        position: "relative",
                        left: -180,
                        top: -190
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
                            <div className={'about-container'}>
                                <div style={{
                                    position: "absolute",
                                    left: -340,
                                    top: -50,
                                }}>Know Us!
                                </div>
                                <GradientText head={'Why'} text={'Traditional education misses the mark by not recognizing the unique ways we each learn, our diverse backgrounds, and our individual passions. This makes learning less intuitive and engaging. We are all shaped by our distinct journeys and dreams, each carrying a different story and a wealth of experiences'} left={-400} top={40}/><br/>
                                <GradientText head={'What'} text={'Tap into each person\'s unique background and knowledge. Offer personalized analogies and explanations. Bridge abstract concepts to real-world applications.'} left={-400} top={265}/><br/>
                                <GradientText head={'How'} text={'Maps new concepts to a learner\'s existing knowledge through personalized analogies. Generates AI images to visually represent these analogies. Helps learners see the big picture and grasp the relevance of concepts.'} left={-400} top={430}/>
                                <div style={{
                                    position: "absolute",
                                    left: 430,
                                    top: 160,
                                    height: 350,
                                    width: 350,
                                    borderRadius: 35,
                                    backgroundImage: `url(/Root.png)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}><span className="visually-hidden" style={{
                                    position: 'absolute',
                                    marginLeft:10,
                                    marginTop:10,
                                    fontSize:10,
                                    zIndex:-1,
                                }}>An image depicting how education is the root of problem-solving, just as a tree&apos;s strength lies in its roots.</span>
                                </div>
                                <div className={'reach-div'} style={{
                                    position: 'absolute',
                                    top: 600,
                                    width: 900,
                                    left: -240
                                }}>
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <Reach/>
                                    </Suspense></div>
                            </div>

                        </motion.h1>
                    </div>
                </HeroHighlight>
                <p style={{
                    position: "relative",
                    left:590,
                    fontSize:20
                }}>Scroll down!</p>
            </div>
        </>
    );
}

export default About;
