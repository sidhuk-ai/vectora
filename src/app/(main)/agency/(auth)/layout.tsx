import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image
              src={"/noBgWhite.png"}
              alt="Logo"
              height={55}
              width={150}
              className="hidden cursor-pointer dark:block"
            />
            <Image
              src={"/noBgColor.png"}
              alt="Logo"
              height={55}
              width={150}
              className="dark:hidden block cursor-pointer"
            />
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/">
              <Button variant="ghost" className="group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>
      {children}

      {/* Footer */}
      <footer className="border-t bg-card/30 backdrop-blur-sm py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Vectora. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
