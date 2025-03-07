import {cn} from "@/lib/utils";
import {Marquee} from "../magicui/marquee.tsx";

import activisionLogo from "/img/companyLogos/Activision-Logo-600x600-1-300x300.png";
import amdocsLogo from "/img/companyLogos/Amdocs-Logo-1200x1200-whitetrans-300x300.png";
import Arcadis from "/img/companyLogos/Arcadis-Logo-1200x1200-whitetrans-300x300.png";
import Bayer from "/img/companyLogos/Bayer_White.png";
import BNY from "/img/companyLogos/BNY-Mellon-Logo-600x600-3-300x300.png";
import BOX from "/img/companyLogos/Box-logo-1200x1200-1-300x300.png";
import Chevron from "/img/companyLogos/Chevron-300x300.png";
import cloudfare from "/img/companyLogos/Cloudflare-Logo-600x600-whitetrans-300x300.png";
import cocacola from "/img/companyLogos/Coca-Cola-Europacific-Partners-Logo-1200x1200-whitetrans-300x300.png";
import DC from "/img/companyLogos/DC-Department-of-Employment-Services-1200x1200-whitetrans-300x300.png";
import defense from "/img/companyLogos/Defense-Innovation-Unit-300x300.png";
import eaton from "/img/companyLogos/Eaton-logo-600x600-1-300x300.png";
import Ericsson from "/img/companyLogos/Ericsson-Logo-600x600-transparent-300x300.png";
import foley from "/img/companyLogos/Foley-Equipment-Logo-600x600-whitetrans-c-300x300.png";
import forvia from "/img/companyLogos/Forvia-Logo-600x600-transparent-300x300.png";
import dexom from "/img/companyLogos/logo_dexcom_1200x1200_2-300x300.png";
import mm from "/img/companyLogos/MM-Group-600x600-whitetrans-300x300.png";
import ntt from "/img/companyLogos/NTT-Data-Logo-1200x1200-1-300x300.png";
import statedepartment from "/img/companyLogos/NY-State-Dept-of-Labor-white-600x600-1-300x300.png";
import oneten from "/img/companyLogos/OneTen-300x300.png";
import teva from "/img/companyLogos/Teva-Logo-600x600-1-300x300.png";
import ubisoft from "/img/companyLogos/Ubisoft-Logo-600x600-1-300x300.png";
import vodafone from "/img/companyLogos/Vodaphone-Logo-600x600-2-300x300.png";


const reviews = [
    {img: activisionLogo, username: "activision"},
    {img: amdocsLogo, username: "amdocs"},
    {img: Arcadis, username: "arcadis"},
    {img: Bayer, username: "bayer"},
    {img: BNY, username: "bny"},
    {img: BOX, username: "box"},
    {img: Chevron, username: "chevron"},
    {img: cloudfare, username: "cloudfare"},
    {img: cocacola, username: "cocacola"},
    {img: DC, username: "dc"},
    {img: defense, username: "defense"},
    {img: eaton, username: "eaton"},
    {img: Ericsson, username: "ericsson"},
    {img: foley, username: "foley"},
    {img: forvia, username: "forvia"},
    {img: dexom, username: "dexom"},
    {img: mm, username: "mm"},
    {img: ntt, username: "ntt"},
    {img: statedepartment, username: "statedepartment"},
    {img: oneten, username: "oneten"},
    {img: teva, username: "teva"},
    {img: ubisoft, username: "ubisoft"},
    {img: vodafone, username: "vodafone"},
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
                        img,
                        username,
                    }: {
    img: string;
    username: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full opacity-60  cursor-pointer overflow-hidden rounded-xl border ",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                " dark:bg-transparent dark:hover:bg-transparent",
                // " dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "dark:text-white",
            )}
        >
            <img
                className={`lg:hidden`}
                width="90" height="90" alt="" src={img} style={{
                filter: "brightness(0) invert(1)",
            }}/>

            <img
                className={`hidden lg:block`}
                width="100" height="100" alt="" src={img} style={{
                filter: "brightness(0) invert(1)",
            }}/>


            {/*<img*/}
            {/*    className={`hidden lg:block`}*/}
            {/*    width="120"*/}
            {/*    height="120"*/}
            {/*    alt=""*/}
            {/*    src={img}*/}
            {/*    style={{*/}
            {/*        filter: "brightness(0.8) invert(1) grayscale(100%)",*/}
            {/*    }}*/}
            {/*/>*/}

        </figure>
    );
};

export function MarqueeDemo() {
    return (

        <>
            <div
                className={` flex  flex-col w-full  justify-center  lg:mb-10 items-center  lg:mt-40`}>
                <h1 className={`text-md md:text-xl font-normal  font-popins tracking-wider text-slate-400 text-center`}>Helping
                    17+ Institutions & 5K+ Software Engineers
                </h1>

            </div>
            h

            <div className="w-full flex items-center justify-center">
                <div className="relative flex max-w-7xl flex-col items-center justify-center overflow-hidden dark">
                    <Marquee pauseOnHover className="[--duration:60s]">
                        {firstRow.map((review) => (
                            <div className="flex items-center justify-center mr-4 lg:mr-20">
                                <ReviewCard key={review.username} {...review} />
                            </div>
                        ))}
                    </Marquee>

                    {/* Left Fade */}
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent"></div>

                    {/* Right Fade */}
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent"></div>
                </div>
            </div>

        </>
    )
        ;
}
