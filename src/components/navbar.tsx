import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
    return(
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex container mx-auto h-17 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image 
                src={'/noBgWhite.png'}
                alt="Logo"
                height={60}
                width={150}
                className="hidden cursor-pointer dark:block"
            />
            <Image 
                src={'/noBgColor.png'}
                alt="Logo"
                height={60}
                width={150}
                className="dark:hidden block cursor-pointer"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost">
              Sign In
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>
    )
}