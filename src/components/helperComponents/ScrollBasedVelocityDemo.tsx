import { VelocityScroll } from "../magicui/scroll-based-velocity.tsx";

export function ScrollBasedVelocityDemo() {
    return (
        <div className="relative flex w-full px-4  flex-col items-center justify-center overflow-hidden">
            <VelocityScroll>
                raisoni PCE rbcoe
            </VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 "></div>
        </div>
    );
}
