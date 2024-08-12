import React from "react";
import PricingPage from "@/components/PricingPage";
import NavBar from "@/components/NavBar";

const Pricing = () => {
    return (<>
            <NavBar/>
            <div
                className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.3] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <PricingPage/>
            </div>
        </>
    )
}
export default Pricing


