"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { createAuthClient } from "better-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
const { useSession } = createAuthClient();

export default function Navbar() {
  const { data: session, isPending, error, refetch } = useSession();
  const router = useRouter();
  if (error) {
    toast.error(error.message);
    refetch();
  }

  async function handleSignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/agency/sign-up"); // redirect to login page
        },
      },
    });
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex container mx-auto h-17 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <Image
            src={"/noBgWhite.png"}
            alt="Logo"
            height={60}
            width={150}
            className="hidden cursor-pointer dark:block"
          />
          <Image
            src={"/noBgColor.png"}
            alt="Logo"
            height={60}
            width={150}
            className="dark:hidden block cursor-pointer"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {isPending ? (
            <Skeleton className="w-20 h-10" />
          ) : session?.user ? (
            <Button variant={"default"} onClick={handleSignOut}>
              Sign out
            </Button>
          ) : (
            <Link href={"/agency/sign-up"}>
              <Button variant="ghost">{"Sign up"}</Button>
            </Link>
          )}
          <Link href={'/agency'}>
            <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
