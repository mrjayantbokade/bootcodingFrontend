

import {AnimatedBeamMultipleOutputDemo} from "../helperComponents/AnimatedBeamMultipleOutputDemo.tsx";
import {BentoCard, BentoGrid} from "../magicui/bento-grid.tsx";
import {Ripple} from "@/components/magicui/ripple.tsx";



const features = [
        {
            name: "AI Algorithms",
            description: "Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs.",
            href: "#",
            cta: "Learn more",
            className: "col-span-3 lg:col-span-1",
            background: (


                <img
                    className={`absolute right-0 top-28 origin-top scale-75 rounded-md  lg:top-12 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90`}
                    src="https://startup-template-sage.vercel.app/hero-dark.png" alt=""/>

            ),
        },
        {
            name: "Seamless Integration",

            description:
                "Easily integrate our AI solutions into your existing workflows and systems for a smooth and efficient operation.",
            // description: "Stay ahead with up-to-date content aligned with industry trends & best practices.",
            href:
                "#",
            cta:
                "Learn more",
            className:
                "col-span-3 lg:col-span-2",
            background:
                (

                    <AnimatedBeamMultipleOutputDemo
                        className="absolute right-2  top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105"/>

                    // <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
                ),
        }
        ,
        {

            name: "Unified Platform",
            description:
                "Simplify your prep with a AI Central Hub for all essential resources.\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n" +
                "\n",
            href:
                "#",
            cta:
                "Learn more",
            className:
                "col-span-3 lg:col-span-2",
            background:
                (
                    <div>

                        <div>
                            <img
                                className={`absolute left-20  z-50 lg:-right-52  top-20 lg:top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)] group-hover:scale-90`}
                                src="https://startup-template-sage.vercel.app/hero-dark.png" alt=""/>
                        </div>

                        <Ripple className={`py-96`}/>
                    </div>
                ),
        }
        ,
        {

            name: "Customizable Services",
            description:
                "Tailor our AI services to get the most out of our platform.\n",
            className:
                "col-span-3 lg:col-span-1",
            href:
                "#",
            cta:
                "Learn more",
            background:
                (
                    // <div>
                    //     <Calendar
                    //         mode="single"
                    //         selected={new Date(2022, 4, 11, 0, 0, 0)}
                    //         className=""
                    //     />
                    // </div>
                    <img
                        className={`absolute right-0 top-28 origin-top scale-75 rounded-md  lg:top-12 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90`}
                        src="https://startup-template-sage.vercel.app/hero-dark.png" alt=""/>

                ),
        }
        ,
    ]
;

export function BentoDemo() {
    return (
        <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard
                    key={idx} {...feature} />
            ))}
        </BentoGrid>
    );
}
