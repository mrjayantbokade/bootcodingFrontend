import React from "react";

const Banner: React.FC = () => {
    return (
        <div className="banner h-auto w-full bg-purplePalette text-white/80 bg-blue-700 flex flex-wrap gap-2 items-center text-center justify-center text-xs font-bold tracking-wide py-4 p-3">
            🚀 We’ve recently raised a $17M Series A with the participation of our incredible users
            <a href="" className="underline decoration-1 underline-offset-2"> Read our founder’s announcement</a>
        </div>
    )
}

export default Banner;