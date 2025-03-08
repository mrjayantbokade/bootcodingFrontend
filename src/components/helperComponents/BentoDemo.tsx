import {CalendarIcon, FileTextIcon,} from "@radix-ui/react-icons";
import {FaShuffle} from "react-icons/fa6";
import {GrIntegration} from "react-icons/gr";


import {cn} from "@/lib/utils";
import {AnimatedBeamMultipleOutputDemo} from "../helperComponents/AnimatedBeamMultipleOutputDemo.tsx";
import {BentoCard, BentoGrid} from "../magicui/bento-grid.tsx";
import {Marquee} from "../magicui/marquee.tsx";
import {Ripple} from "@/components/magicui/ripple.tsx";

const files = [
    {
        name: "Ben Golf",
        body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
    },
    {
        name: "finances.xlsx",
        body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
    },
    {
        name: "logo.svg",
        body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
    },
    {
        name: "keys.gpg",
        body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
    },
    {
        name: "seed.txt",
        body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
    },
];

const features = [
        {
            // Icon: FileTextIcon,
            name: "AI Algorithms",
            description: "Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs.",
            href: "#",
            cta: "Learn more",
            className: "col-span-3 lg:col-span-1",
            background: (


                <img
                    className={`absolute right-0 top-28 origin-top scale-75 rounded-md  lg:top-12 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90`}
                    src="https://startup-template-sage.vercel.app/hero-dark.png" alt=""/>
// <Marquee
//     pauseOnHover
//     className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
// >
//     {files.map((f, idx) => (
//         <figure
//             key={idx}
//             className={cn(
//                 "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
//                 "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//                 "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//                 "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
//             )}
//         >
//             <div className="flex flex-row items-center gap-2">
//                 <div className="flex flex-col">
//                     <figcaption className="text-sm font-medium dark:text-white ">
//                         {f.name}
//                     </figcaption>
//                 </div>
//             </div>
//             <blockquote className="mt-2 text-xs">{f.body}</blockquote>
//         </figure>
//     ))}
// </Marquee>
            ),
        },
        {
            // Icon: GrIntegration,
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
            // Icon: FaShuffle,

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
            // Icon: CalendarIcon,

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
