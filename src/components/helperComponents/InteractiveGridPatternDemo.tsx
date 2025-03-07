"use client";

import { cn } from "@/lib/utils.ts";
import { InteractiveGridPattern } from "../magicui/interactive-grid-pattern.tsx";

export function InteractiveGridPatternDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-transparent">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}
