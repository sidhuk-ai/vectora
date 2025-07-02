import { createAuthClient } from "better-auth/react"
import { toast } from "sonner"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    fetchOptions: {
        onError(e) {
            if(e.error.status === 429) {
                toast.error("Too many request. Please try again later.");
            }
        }
    }
})