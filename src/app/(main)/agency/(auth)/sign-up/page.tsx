import { Signup } from "@/components/signup-page";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
 
    if(session) {
        redirect("/agency")
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <main className="container mx-auto px-4 py-8 md:py-16">
                <div className="max-w-2xl mx-auto">
                    <Signup />
                </div>
            </main>
        </div>
    )
}