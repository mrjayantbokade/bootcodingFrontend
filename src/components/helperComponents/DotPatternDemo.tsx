"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "../magicui/dot-pattern.tsx";

export function DotPatternDemo() {
    return (
        <div className="relative flex h-screen   w-full flex-col items-center justify-center overflow-hidden  ">
            <DotPattern
                className={cn(
                    "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
            />
        </div>
    );
}
