"use client";


import {MarqueeDemo} from "@/components/helperComponents/MarqueeComponentDark.tsx";

import g2logo from "/img/g2/G2_Logo_Red_RGB.svg"
import bottomImg from "/backgrounds/bottomBackground.avif"

import {Link} from "react-router-dom";
import {RainbowButton} from "@/components/magicui/rainbow-button";
import {cn} from "@/lib/utils";
import {AnimatedGradientText} from "@/components/magicui/animated-gradient-text";

import {BrainCircuit, Layers2} from 'lucide-react';
import {HeroVideoDialogDemo} from "@/components/helperComponents/HeroVideoDialogDemo.tsx";

import {BlurFade} from "../components/magicui/blur-fade.tsx";
import {BentoDemo} from "@/components/helperComponents/BentoDemo.tsx";


const HomePage: React.FC = () => {


    return (
        <>


            <div
                className={` relative  z-[9999] bg-black min-h-fit max-w-8xl justify-center   overflow-hidden  mx-auto`}>


                <div className={cn(" hidden md:block absolute z-[-1] w-full magnify-200",
                    "[mask-image:linear-gradient(to_top_right,white,white,white,transparent)]",
                    "[mask-image:linear-gradient(to_bottom_right,white,white,white,transparent)]"
                )}
                >
                    <img src={bottomImg} alt="Hero Background"/>
                </div>


                <div className=" md:hidden absolute top-[-250px] rotate-180  z-[-1] w-full h-screen">
                    <div
                        className={cn(
                            "absolute inset-0 bg-center  opacity-50 bg-cover md:bg-contain magnify-200",
                            "[mask-image:linear-gradient(to_bottom_top,white,transparent,transparent)]"
                        )}
                        style={{backgroundImage: `url(${bottomImg})`}}
                    ></div>

                </div>


                <div
                    className="relative w-full flex justify-center pt-10 pb-10 md:pb-2 md:pt-0 z-0 mx-auto px-5 lg:px-12 ">
                    <button
                        id="highlight-button"
                        className="group relative w-fit  px-3 hover:-translate-y-0.5 transition ease-in-out duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-400/30 cursor-pointer  py-1 mb-8 rounded-lg border-[0.1px] border-indigoMain/40 flex flex-row gap-2 justify-center items-center bg-gradient-to-br from-black via-indigo-600/20 to-black/10 font-light"
                    >
                        <p
                            className="font-inter tracking-wide font-light text-sm text-indigo-50 group-hover:text-indigo-100 group-hover:translate-x-1 transition ease-in-out duration-700"
                            id="task-of-the-day"
                        >
                            #1 AI SERVICE & PRODUCTS PROVIDER
                        </p>
                        <div
                            className="absolute top-full z-0 left-0 mt-2 w-82 p-2 bg-gray-200 text-gray-900 rounded-lg shadow-lg  invisible group-hover:visible  "
                        >
                            <div className={`flex  gap-2 items-center`}>
                                <p className="text-md font-bold mb-1">1,000+ 5-star reviews on</p>
                                <img
                                    className={`h-8`}
                                    src={g2logo} alt="g2logo"/>
                            </div>
                            <p className="text-xs font-inter text-left font-bold  mb-4">
                                "Our 380,000+ employees all over the world must have the same competence profile.
                                Synthesia
                                helps us develop engaging, relevant, and localized training content at scale."
                            </p>

                            <div className={`flex gap-2 items-center`}>
                                <img
                                    className={`h-8`}
                                    src={g2logo} alt="g2logo"/>
                                <div className={`flex flex-col text-left `}>
                                    <p className="text-sm font-medium">Ben K.</p>
                                    <p className="text-xs font-medium">SVP Learning and Dev. at Teleperformance</p>
                                </div>
                            </div>

                        </div>
                    </button>

                </div>

                <header
                    className="   z-[999]  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  px-5 md:py-0 py-2  lg:px-12">

                    <div className="col-span-1  text-gray-300    ">
                        <div className={`font-inter text-center  md:font-medium md:text-7xl  md:text-left text-5xl`}>
                            <div>
                                <h1 className="  tracking-wide sm:text-6xl md:text-7xl  ">
                                    Unleash
                                </h1>
                                <AnimatedGradientText className=" text-6xl sm:text-7xl md:text-8xl  tracking-wide  ">
                                    Limitless
                                </AnimatedGradientText>


                                <h1 className="  tracking-wide sm:text-6xl md:text-7xl  ">
                                    Potential
                                </h1>
                            </div>


                        </div>
                        <p className="text-md pb-2 md:pb-2 text-center md:text-left font-normal font-inter tracking-wide text-gray-300/90  my-4">
                            Take a strategic approach to AI-Powered Interview and Career Solutions.
                        </p>

                        <div className=" text-gray-400/90  text-xs font-normal tracking-wide hidden lg:block ">
                            <h1>
                                Yes, it’s really free!{" "}
                                <a href="#" className="underline hover:text-purplePalette">
                                    Here’s how.
                                </a>
                            </h1>
                            <h1>
                                Our AI is never trained on your data.{" "}
                                <a href="#" className="underline hover:text-purplePalette pointer-cursor">
                                    Learn more.
                                </a>
                            </h1>
                        </div>

                        <div
                            className={`flex flex-row pt-2 justify-center md:justify-start gap-10 mt-5 z-[999] w-full`}>
                            <Link to={`products`}
                            >
                                <RainbowButton>Get Unlimited Access</RainbowButton>

                            </Link>
                        </div>

                    </div>

                    {/*image*/}
                    <div
                        className={cn(
                            "col-span-1 h-full w-full dark relative z-50  text-white   lg:left-20 pt-12 lg:pt-2",
                        )}>

                        <div

                        >

                        </div>
                        <HeroVideoDialogDemo/>


                    </div>


                </header>

                <div className={`pt-10`}>
                    <MarqueeDemo/>
                </div>


            </div>


            {/*break here*/}
            <div className="app_home_page max-w-7xl px-5 mx-auto">

                <BlurFade delay={0.25} inView>

                    <section className="  text-white py-20">
                        <p className={`text-center text-xs font-quicksand  md:mb-2 text-slate-400`}>PROBLEM</p>
                        <div className={` lg:px-72`}>

                            <h1 className={`text-center font-popins  text-2xl md:text-5xl  py-5 px-5 pb-20 md:pb-24 text-slate-300`}>Traditional
                                way won't take you anywhere</h1>

                        </div>
                        <div className={`flex flex-col gap-y-20 gap-x-20 md:flex-row`}>


                            <BlurFade delay={0.4} inView>
                                <div className={`max-w-sm`}>
                                    <div
                                        className={`h-12 w-12 flex justify-center items-center rounded-full text-slate-400 bg-slate-900 mb-4 `}>
                                        <BrainCircuit/>

                                    </div>
                                    <h3 className={`font-sora text-md  font-medium md:font-normal md:text-lg text-slate-200`}>No
                                        AI Integration</h3>
                                    <p className={`py-2 font-light font-popins text-md text-gray-400`}>The absence
                                        of
                                        AI-driven
                                        tools limits personalized insights and progress tracking, making learning
                                        less
                                        effective.</p>
                                </div>
                            </BlurFade>

                            <BlurFade delay={0.6} inView>

                                <div className={`max-w-sm`}>
                                    <div
                                        className={`h-12 w-12 flex justify-center items-center rounded-full text-slate-400 bg-slate-900 mb-4 `}>
                                        <Layers2/>

                                    </div>
                                    <h3 className={`font-sora text-md font-medium md:font-normal md:text-lg text-slate-200`}>Lack
                                        of Platforms</h3>
                                    <p className={`py-2 font-light font-popins  text-md text-gray-400`}>Without a
                                        unified
                                        platform, learners rely on scattered resources, slowing down skill
                                        development
                                        and
                                        preparation.</p>
                                </div>
                            </BlurFade>


                            <BlurFade delay={0.8} inView>

                                <div className={`max-w-sm`}>
                                    <div
                                        className={`h-12 w-12 flex justify-center items-center rounded-full text-slate-400 bg-slate-900 mb-4 `}>
                                        <BrainCircuit/>

                                    </div>
                                    <h3 className={`font-sora text-md font-medium md:font-normal md:text-lg text-slate-200`}>Outdated
                                        Preparation</h3>
                                    <p className={`py-2 font-light font-popins text-md text-gray-400`}>Traditional
                                        methods
                                        fail
                                        to keep up with evolving tech demands, creating gaps in knowledge and
                                        application.


                                    </p>
                                </div>
                            </BlurFade>


                        </div>

                    </section>
                </BlurFade>


            </div>


            <div className={`bg-gradient-to-t     from-black via-neutral-500/10 to-black `}>
                <BlurFade delay={0.25} inView>

                    <section className="  text-white py-20 ">
                        <p className={`text-center text-xs font-quicksand   text-slate-400`}>SOLUTION</p>
                        <div className={`px-10 lg:px-96`}>
                            <h1 className={`text-center font-popins  text-2xl md:text-5xl  py-5  text-slate-300`}> Transform
                                Your Workflow with AI-Powered Innovation</h1>

                        </div>
                        <div className={`px-6 md:mb-2 pb-20 md:pb-24 md:px-96`}>
                            <h3 className={` font-popins  text-center text-sm md:text-md md:font-light px-5  pb-10 text-slate-400`}>Conventional
                                methods fall
                                short. Our platform harnesses AI to streamline operations, centralize resources, and
                                drive smarter decision-making, ensuring you stay ahead of the curve.</h3>

                        </div>

                        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
                            <BentoDemo/>
                        </div>

                    </section>
                </BlurFade>

            </div>

            {/*try now section*/}


            <div className="app_home_page  pt-32  mx-auto">


                {/*mobile*/}
                <div className=" md:hidden   rotate-0  z-[-1] w-full h-[500px]">
                    <div
                        className={cn(
                            "absolute inset-0 bg-center bg-cover md:bg-contain ",
                            "[mask-image:linear-gradient(to_bottom_top,white,transparent,transparent)]"
                        )}
                        style={{backgroundImage: `url(${bottomImg})`}}
                    >


                        <header
                            className="   z-[999]  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  px-5 md:py-0 py-2  lg:px-12">

                            <div className="col-span-1  text-gray-300    ">
                                <div
                                    className={`font-inter text-center  md:font-medium md:text-7xl  md:text-left text-5xl`}>
                                    <div>
                                        <h1 className="  tracking-wide sm:text-6xl md:text-7xl  ">
                                            Try
                                        </h1>
                                        <AnimatedGradientText
                                            className=" text-6xl sm:text-7xl md:text-8xl  tracking-wide  ">
                                            Limitless
                                        </AnimatedGradientText>


                                        <h1 className="  tracking-wide  sm:text-6xl md:text-7xl  ">
                                            Potential
                                        </h1>
                                    </div>


                                </div>
                                <p className="text-md pb-2 md:pb-2 text-center md:text-left font-normal font-inter tracking-wide text-gray-300/90  my-4">
                                    Join thousands Businesses accelerating their workflow and Learning
                                </p>


                                <div
                                    className={`flex flex-row pt-5 justify-center md:justify-start gap-10 mt-5 z-[999] w-full`}>
                                    <Link to={`products`}
                                    >
                                        <RainbowButton>Customize Services</RainbowButton>

                                    </Link>
                                </div>

                            </div>


                        </header>


                    </div>

                </div>


                {/*larger screen*/}
                <div
                    style={{backgroundImage: `url(${bottomImg})`}}
                    className=" hidden md:block  rotate-0  z-[-1] w-full h-[500px] bg-contain">
                    <div
                        className={cn(
                            "absolute inset-0 bg-center  md:bg-contain ",
                            "[mask-image:linear-gradient(to_bottom_top,white,transparent,transparent)]"
                        )}

                    >


                        <header
                            className="    z-[999]  max-w-7xl mx-auto ">

                            <div className="col-span-1   text-gray-300     ">
                                <div
                                    className={`font-inter text-center  w-full md:font-medium md:text-7xl   text-5xl`}>
                                    <div>
                                        <h1 className="  tracking-wide sm:text-6xl md:text-7xl  ">
                                            Try
                                        </h1>
                                        <AnimatedGradientText
                                            className=" text-6xl sm:text-7xl md:text-8xl  tracking-wide  ">
                                            Limitless
                                        </AnimatedGradientText>


                                        <h1 className="  tracking-wide  sm:text-6xl md:text-7xl  ">
                                            Potential
                                        </h1>
                                    </div>

                                    <div>
                                        <div className={`w-full flex flex-col justify-center items-center`}>
                                            <p className=" text-center text-sm lg:text-lg  md:text-left font-normal font-inter tracking-wide text-gray-300/90  my-4">
                                                Join thousands Businesses accelerating their workflow and Learning
                                            </p>


                                            <div
                                                className={`flex  text-sm   justify-center md:justify-start gap-10 mt-5 z-[999] `}>
                                                <Link to={`products`}
                                                >
                                                    <RainbowButton>Customize Services</RainbowButton>

                                                </Link>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </div>


                        </header>


                    </div>

                </div>


            </div>


        </>
    )
}


export default HomePage;