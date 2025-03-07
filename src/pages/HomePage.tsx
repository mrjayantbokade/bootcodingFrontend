"use client";


import {HiLightningBolt} from "react-icons/hi";
import {HiDatabase} from "react-icons/hi";
import {HiChartPie} from "react-icons/hi";
import Testimonial from "../components/testimonial/Testimonial";


import {MarqueeDemo} from "@/components/helperComponents/MarqueeComponentDark.tsx";

import g2logo from "/img/g2/G2_Logo_Red_RGB.svg"
import heroImg from "/backgrounds/heroBackground.avif"

import {Link} from "react-router-dom";
import {RainbowButton} from "@/components/magicui/rainbow-button";
import {cn} from "@/lib/utils";
import {AnimatedGradientText} from "@/components/magicui/animated-gradient-text";

import {BrainCircuit, Layers2} from 'lucide-react';
import {HeroVideoDialogDemo} from "@/components/helperComponents/HeroVideoDialogDemo.tsx";

import {BlurFade} from "../components/magicui/blur-fade.tsx";


const HomePage: React.FC = () => {


    return (
        <>


            <div
                className={` relative  z-[9999] bg-black min-h-screen max-w-full   overflow-hidden  mx-auto`}>


                <div className={cn(" hidden md:block absolute z-[-1] w-full",
                    "[mask-image:linear-gradient(to_top_right,white,white,white,transparent)]",
                    "[mask-image:linear-gradient(to_bottom_right,white,white,white,transparent)]"
                )}
                >
                    <img src={heroImg} alt="Hero Background"/>
                </div>


                <div className=" md:hidden absolute top-[-130px] rotate-180  z-[-1] w-full h-screen">
                    <div
                        className={cn(
                            "absolute inset-0 bg-center bg-cover md:bg-contain",
                            "[mask-image:linear-gradient(to_bottom_right,white,white,transparent)]"
                        )}
                        style={{backgroundImage: `url(${heroImg})`}}
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
                            <h1 className="  ">
                                {/*with AI-powered Tools*/}
                            </h1>

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

                    <section className="px-5  text-white py-20">
                        <p className={`text-center text-xs font-quicksand  md:mb-2 text-slate-400`}>PROBLEM</p>
                        <h1 className={`text-center font-popins  text-2xl md:text-4xl  py-5 px-5 pb-20 md:pb-24 text-slate-300`}>Traditional
                            way won't take you anywhere</h1>

                        <div className={`flex flex-col gap-y-20 gap-x-20 md:flex-row`}>


                            <BlurFade delay={0.3} inView>
                                <div className={`max-w-sm`}>
                                    <div
                                        className={`h-12 w-12 flex justify-center items-center rounded-full text-slate-400 bg-slate-900 mb-4 `}>
                                        <BrainCircuit/>

                                    </div>
                                    <h3 className={`font-sora text-md  font-medium md:font-normal md:text-lg text-slate-200`}>No
                                        AI Integration</h3>
                                    <p className={`py-2 font-light font-popins text-md text-gray-400`}>The absence of
                                        AI-driven
                                        tools limits personalized insights and progress tracking, making learning less
                                        effective.</p>
                                </div>
                            </BlurFade>

                            <BlurFade delay={0.3} inView>

                                <div className={`max-w-sm`}>
                                    <div
                                        className={`h-12 w-12 flex justify-center items-center rounded-full text-slate-400 bg-slate-900 mb-4 `}>
                                        <Layers2/>

                                    </div>
                                    <h3 className={`font-sora text-md font-medium md:font-normal md:text-lg text-slate-200`}>Lack
                                        of Platforms</h3>
                                    <p className={`py-2 font-light font-popins  text-md text-gray-400`}>Without a unified
                                        platform, learners rely on scattered resources, slowing down skill development
                                        and
                                        preparation.</p>
                                </div>
                            </BlurFade>


                            <BlurFade delay={0.3} inView>

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


                <section className="max-w-6xl mx-auto my-20 p-6 flex flex-col gap-24">
                    {/* AI-Powered Mock Interviews */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-20">
                        <div className="col-span-1">
                            <div
                                className="h-10 w-10 bg-purple-800 rounded-md flex flex-nowrap items-center justify-center">
                                <HiLightningBolt className="text-white text-xl"/>
                            </div>
                            <div className="mt-6">
                                <h1 className="text-xl font-semibold tracking-wide text-black/80">
                                    AI-Powered Mock Interviews
                                </h1>
                                <p className="text-sm mt-1 font-semibold tracking-wide text-black/60">
                                    Get real-time feedback, personalized insights, and industry-specific questions
                                    to
                                    boost your confidence and success rate.
                                </p>
                                <div
                                    className="text-sm font-semibold tracking-wide text-purple-800 bg-purple-800/20 rounded-xl p-5 mt-3">
                                    Experience next-generation interview preparation with our AI-driven platform.
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1  md:col-span-2">
                            <video
                                src="/video/hero2.mp4"
                                className="h-auto w-auto min-h-full min-w-full object-center"
                                autoPlay
                                muted
                                loop
                            ></video>
                        </div>
                    </div>
                    {/* Comprehensive Mock Tests */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-20">
                        <div className="col-span-1">
                            <div
                                className="h-10 w-10 bg-yellow-500 rounded-md flex flex-nowrap items-center justify-center">
                                <HiDatabase className="text-white text-xl"/>
                            </div>
                            <div className="mt-6">
                                <h1 className="text-xl font-semibold tracking-wide text-black/80">
                                    Comprehensive Mock Tests
                                </h1>
                                <p className="text-sm mt-1 font-semibold tracking-wide text-black/60">
                                    Prepare thoroughly with our extensive collection of mock tests covering
                                    technical
                                    skills, aptitude, and personality assessments.
                                </p>
                                <div
                                    className="text-sm font-semibold tracking-wide text-yellow-500 bg-yellow-500/20 rounded-xl p-5 mt-3">
                                Track your progress and identify areas for improvement.
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <video
                                src="/video/hero3.mp4"
                                className="h-auto w-auto min-h-full min-w-full object-center"
                                autoPlay
                                muted
                                loop
                            ></video>
                        </div>
                    </div>
                    {/* Expert-Led Mock Interviews */}
                    <div
                        className="w-full grid grid-cols-1  outline-sky-500 outline-2 md:grid-cols-3 items-center gap-10 md:gap-20">
                        <div className="col-span-1">
                            <div
                                className="h-10 w-10  bg-sky-500 rounded-md flex flex-nowrap items-center justify-center">
                                <HiChartPie className=" text-white text-xl"/>
                            </div>
                            <div className="mt-6">
                                <h1 className="text-xl font-semibold tracking-wide text-white/80">
                                    Expert-Led Mock Interviews
                                </h1>
                                <p className="text-sm mt-1 font-semibold tracking-wide text-white/60">
                                    Practice with industry professionals who provide valuable feedback and insights.
                                    Get
                                    exposed to real-world scenarios and learn from experienced interviewers.
                                </p>
                                <div
                                    className="text-sm font-semibold tracking-wide text-sky-600 bg-sky-600/20 rounded-xl p-5 mt-3">
                                    Expert Guidance and advice to boost your preparation!
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <video
                                src="/video/hero4.mp4"
                                className="h-auto w-auto min-h-full min-w-full object-center"
                                autoPlay
                                muted
                                loop
                            ></video>
                        </div>
                    </div>
                    {/* Yep, AceInt Supports That */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-20">
                        <div className="col-span-1">
                            <div
                                className="h-10 w-10 bg-rose-500 rounded-md flex flex-nowrap items-center justify-center">
                                <HiChartPie className="text-white text-xl"/>
                            </div>
                            <div className="mt-6">
                                <h1 className="text-xl font-semibold tracking-wide text-black/80">
                                    Yep, AceInt Supports That
                                </h1>
                                <p className="text-sm mt-1 font-semibold tracking-wide text-black/60">
                                    We offer seamless integrations across various platforms and tools to ensure
                                    smooth
                                    workflows, robust performance, and enhanced productivity.
                                </p>
                                <div
                                    className="text-sm font-semibold tracking-wide text-rose-500 bg-rose-500/20 rounded-xl p-5 mt-3">
                                    Power Your Workflow with Seamless Integrations! :fire:
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <img
                                className="h-[300px] md:h-[500px] w-auto aspect-square ms-auto"
                                src="https://static-landing.fathom.video/b85d0e2245c6d62cfa4627c6853c3fae2537beac/hls/5yfst.png"
                                alt="Seamless Integration"
                            />
                        </div>
                    </div>
                </section>
                <Testimonial/>
            </div>


        </>
)
}


export default HomePage;