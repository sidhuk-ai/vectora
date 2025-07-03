import { AnimatedGrid } from "@/components/animated-grid";
import { Signup } from "@/components/signup-page";

export default function Page() {
    return (
        <div className="min-h-screen bg-background transition-colors duration-300">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <AnimatedGrid />
            </div>
            <main className="container mx-auto px-4 py-8 md:py-16">
                <div className="max-w-2xl mx-auto">
                    <Signup />
                </div>
            </main>
        </div>
    )
}