import { getAuthUserDetails } from "@/actions/auth";
import { verifyAndAcceptInvitation } from "@/actions/invitations";

export default async function Page() {
    const agencyId = await verifyAndAcceptInvitation();
    console.log(agencyId);

    const user = await getAuthUserDetails();
    return (
        <div>
            Agency page
        </div>
    )
}