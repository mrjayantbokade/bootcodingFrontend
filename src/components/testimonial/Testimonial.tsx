import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import userTestimonials from "../../jsons/testimonial";



const Testimonial: React.FC = () => {
    const [testimonials, setTestimonials] = useState(userTestimonials);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        const scrollContent = () => {
            if (scrollContainerRef.current && !isHovered) {
                const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
                if (scrollTop + clientHeight >= scrollHeight - 10) {
                    setTestimonials((prev) => [
                        ...prev,
                        ...userTestimonials.map((t, i) => ({
                            ...t,
                            id: prev.length + i + 1,
                        })),
                    ]);
                }
                scrollContainerRef.current.scrollTop += 1;
            }
        };

        const intervalId = setInterval(scrollContent, 20);

        return () => clearInterval(intervalId);
    }, [isHovered]);

    return (
        <div className="app_testimonial max-w-6xl mx-auto">
            <div className="max-w-3xl mx-auto"></div>
            <div className="relative z-[20] top-6 max-w-2xl  mx-auto">
                <h1 className="text-2xl text-center font-semibold tracking-wide text-black">What Customers Are Saying</h1>
                <p className="text-[13px] text-center font-medium text-black/80 tracking-wide text-wrap mt-2">Sales teams praise Fathom for its note-free, focus-friendly calls, quick transcriptions, and CRM sync that streamline follow-ups. It's their go-to for snagging more deals with less hassle.</p>
                <div className="flex flex-wrap justify-center gap-3 mt-5">
                    <button className=" text-nowrap text-sm  text-bluePalette bg-bluePalette/10 font-bold tracking-wide rounded-full px-5 py-2 mt-3">Students</button>
                    <button className=" border-[1.5px] border-black/15 text-nowrap text-xs font-bold tracking-wide rounded-full px-5 py-2 mt-3">Teachers</button>
                    <button className=" border-[1.5px] border-black/15 text-nowrap text-xs font-bold tracking-wide rounded-full px-5 py-2 mt-3">Sales</button>
                    <button className=" border-[1.5px] border-black/15 text-nowrap text-xs font-bold tracking-wide rounded-full px-5 py-2 mt-3">UI Design</button>
                    <button className=" border-[1.5px] border-black/15 text-nowrap text-xs font-bold tracking-wide rounded-full px-5 py-2 mt-3">Suggestions</button>
                </div>
            </div>
            <div className="relative mt-5">
                <div className="absolute top-0 left-0 z-[10] w-full h-14  bg-white"></div>
                <div className="h-[600px] w-full overflow-y-hidden"
                     ref={scrollContainerRef}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}>
                    <div className="vertical testimonial scrolling grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 select-none relative">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-5 bg-white rounded-xl cursor-pointer group relative overflow-hidden">
                                <div className="absolute inset-0 border-[1px] border-purplePalette/30 rounded-xl group-hover:border-purplePalette/60 group-hover:shadow-[0_0_10px_4px_rgba(255,255,0,0.7)] transition-all duration-300 pointer-events-none"></div>
                                <div className="relative flex flex-nowrap flex-col">
                                    <p className="text-bluePalette font-semibold tracking-wide text-xs">{testimonial.name}</p>
                                    <div className="inline-flex flex-nowrap items-center gap-2 text-yellow-500">
                                        <div className="flex flex-nowrap items-center space-x-1 text-[10px] text-yellow-500">
                                            {Array.from({ length: testimonial.rating }).map((_, i) => (<FaStar key={i} />))}
                                        </div>
                                        <p className="font-bold tracking-wide text-xs">{testimonial.rating}/5</p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-sm font-bold tracking-wide text-black/80">"{testimonial.title}"</h1>
                                    <p className="text-[12.6px] font-medium tracking-wide text-black/60 mt-2">{testimonial.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={"absolute bottom-0 left-0 z-[10] w-full h-20 bg-white"}></div>
            </div>
        </div>
    );
};

export default Testimonial;
